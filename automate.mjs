import { exec } from "child_process";
import { setTimeout } from "timers/promises";

const commands = ["git add .", "git commit -m'done'", "git push"];

for (const command of commands) {
    if (command.includes("git commit")) {
        command.replace("done", new Date().toLocaleString());
    }
    exec(command, async (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }
        if (stderr) {
            console.log(`${command} error: ${stderr}`);
            return;
        }
        console.log(`${stdout} initialize`);
    });
    await setTimeout(5000);
    console.log("wait 5 seconds");
}
