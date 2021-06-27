import { useCallback } from "react";
import { ApiDownloadUserData, ApiDownloadUserDataResponse } from "../api";
import { fileSave } from "browser-fs-access";

export default function useDownloadUserData() {
    const download = useCallback(async (e) => {
        if (e) e.preventDefault();
        const { res, data } = await ApiDownloadUserData();
        if (res === ApiDownloadUserDataResponse.FAILED) return;
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        fileSave(blob, { fileName: "data.json", extensions: [".json"] });
    }, []);

    return [download];
}
