import { spawn } from "bun";
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
  
    console.log("Starting Backup")
    await spawn(['bash', './backup.sh', user, host, port, db, fileName, pass]);
    spawn(['bash', './backup.sh', aquaman_user, aquaman_host, aquaman_port, aquaman_db, aquaman_fileName, aquaman_pass]);
  
}

backupPostgresqlDB()
