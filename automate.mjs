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
        console.log(stdout);
    });
};

const getCustomCommit = () => {
    return `git commit -m"[Done] - ${new Date().toLocaleString()}"`;
};

const runAutomation = async () => {
    for (let command of commands) {
        if (command.includes("git commit")) {
            command = getCustomCommit();
        }
        await runCommand(command);
        await setTimeout(5000);
    }
    await setTimeout(50000); // wait for 50 seconds
    runAutomation();
};

runAutomation();
