import { spawn } from "bun";


async function backupPostgresqlDB() {
  const user = Bun.env.PGUSER;
  const host = Bun.env.PGHOST;
  const port = Bun.env.PGPORT;
  const db = Bun.env.PGDATABASE;
  const fileName = Bun.env.YOUR_FILENAME_HERE;
  const pass = Bun.env.PGPASSWORD;

  let start = false;
  console.log("Starting Backup")
  const child = spawn(['bash', './backup.sh', user, host, port, db, fileName, pass]);

  const res = await new Response(child.stdout);
  
  const ok = await res.ok;

  if(ok){
    start = ok
  }

  if(start){
    child.kill()
    console.log("Backup Completed")
  }
}

backupPostgresqlDB()  