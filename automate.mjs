import { exec } from "child_process";

exec("git push", (err, stdout, stderr) => {
    if (err) {
        console.log(`Error: ${err.message}`);
        return;
    }
    if (stderr) {
        console.log(stderr, "stderr");
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

const commands = ["git add .", "git commit -m'done'", "git push"];

for (const command of commands) {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err.message}`);
            return;
        }
        if (stderr) {
            console.log(stderr, "stderr");
            console.log(`stderr: ${stderr}`);
            return;
        }
        setTimeout(() => {
            console.log("done");
        }, 2000);
    });
}
