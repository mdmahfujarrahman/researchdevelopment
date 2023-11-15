import { exec } from "child_process";
import { setTimeout } from "timers/promises";

const commands = ["git add .", "git commit -m'done'", "git push"];

for (const command of commands) {
    exec(command, async (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }
        if (stderr) {
            console.log(`${command} initialize`);
            return;
        }
        console.log(`${stdout} initialize`);
    });
    await setTimeout(5000);
    console.log("wait 5 seconds");
}
