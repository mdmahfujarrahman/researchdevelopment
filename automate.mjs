import { exec } from "child_process";
import { setTimeout } from "timers/promises";

const commands = ["git add .", "git commit -m'done'", "git push"];

const runCommand = async (command) => {
    exec(command, async (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }
        if (stderr) {
            console.log(`${command} error: ${stderr}`);
            return;
        }
    });
};

const getCustomCommit = () => {
    return `git commit -m"[Done] - ${new Date().toLocaleString()}"`;
};

for (let command of commands) {
    console.log("after 5 seconds");
    if (command.includes("git commit")) {
        command = getCustomCommit();
    }
    await runCommand(command);
    await setTimeout(5000);
    console.log("wait 5 seconds");
}
