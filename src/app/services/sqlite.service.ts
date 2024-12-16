import { Injectable, signal, WritableSignal } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

const DB_USERS = 'myuserdb';

export interface UsuarioService {}

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private user: WritableSignal<Usuarios[]> = signal<Usuarios[]>([]);

  constructor() { }

  async inicializarPlugin(){
    this.db = await this.sqlite.createConnection(
      DB_USERS,
      false,
      'no-encryption',
      1,
      false
    );
  
    await this.db.open();

    const schema = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    email TEXT,
    sexo TEXT,
    contraseña TEXT,
    telefono INTEGER,
    direccion TEXT,
    imagen BLOB,
    activate INTEGER DEFAULT 1
    );`;

    await this.db.execute(schema);
    this.loadUsers();
    return true;
    }

    async loadUsers() {
      const users = await this.db.query('SELECT * FROM users;');
      this.user.set(users.values || []);
    }
  }

