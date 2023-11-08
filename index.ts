import { spawnSync } from "bun";
  // avantgarde db
  const today = await new Date().toDateString().replace(/\s/g, '')
  const user = Bun.env.PGUSER;
  const host = Bun.env.PGHOST;
  const port = Bun.env.PGPORT;
  const db = Bun.env.PGDATABASE;
  const fileName = `${Bun.env.YOUR_FILENAME_HERE}${today}`;
  const pass = Bun.env.PGPASSWORD;
  // aquaman db
  const aquaman_user = Bun.env.AQUAMAN_PGUSER;
  const aquaman_host = Bun.env.AQUAMAN_PGHOST;
  const aquaman_port = Bun.env.AQUAMAN_PGPORT;
  const aquaman_db = Bun.env.AQUAMAN_PGDATABASE;
  const aquaman_fileName = `${Bun.env.AQUAMAN_YOUR_FILENAME_HERE}${today}`;
  const aquaman_pass = Bun.env.AQUAMAN_PGPASSWORD;

async function backupPostgresqlDB() {
  
    console.log("Starting Backup Process")
    const checkBrew = await spawnSync(['bash', './updateBrew.sh']);
    console.log(checkBrew.stdout.toString())
    console.log(checkBrew.stderr.toString())
    const checkPostgresql = await spawnSync(['bash', './installPostgresql.sh'])
    console.log(checkPostgresql.stdout.toString())
    console.log(checkPostgresql.stderr.toString())
    const agDump = await spawnSync(['bash', './backup.sh', user, host, port, db, fileName, pass]);
    console.log(agDump.stdout.toString())
    console.log(agDump.stderr.toString())
    const aquaDump = await spawnSync(['bash', './backup.sh', aquaman_user, aquaman_host, aquaman_port, aquaman_db, aquaman_fileName, aquaman_pass]);
    console.log(aquaDump.stdout.toString())
    console.log(aquaDump.stderr.toString())
    if(aquaDump.success){
      console.log("Backup Succeeded")
    }
    
}

backupPostgresqlDB()
