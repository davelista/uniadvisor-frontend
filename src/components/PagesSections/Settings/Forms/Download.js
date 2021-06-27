import useDownloadUserData from "../../../../hooks/useDownloadUserData";
import styles from "../Settings.module.css";
import { Button } from "../../../Buttons/Button";

export default function Download() {
    const [download] = useDownloadUserData();

    return (
        <form className={styles.formContainer} noValidate autoComplete="off" onSubmit={download}>
            <div style={{ maxWidth: "30%" }}>
                <Button buttonStyle="btn--outline" type="submit">
                    <h6 style={{ color: "white" }}>Download</h6>
                </Button>
            </div>
        </form>
    );
}
