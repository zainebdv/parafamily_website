// TODO: PostgreSQL schema for users table
// CREATE TABLE users (
//   id         SERIAL PRIMARY KEY,
//   name       VARCHAR(100) NOT NULL,
//   email      VARCHAR(150) UNIQUE NOT NULL,
//   password   TEXT NOT NULL,                -- bcrypt hash
//   role       VARCHAR(20) DEFAULT 'client', -- 'client' | 'admin'
//   created_at TIMESTAMPTZ DEFAULT NOW()
// );
//
// Export helper query functions, e.g.:
//   findByEmail(email)  → SELECT * FROM users WHERE email=$1
//   createUser(data)    → INSERT INTO users ...




// models/Utilisateur.js
module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define('utilisateurs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    mot_de_passe: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(50),
      defaultValue: 'client',
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'utilisateurs',
    timestamps: false,           // On gère created_at manuellement
    underscored: false
  });

  return Utilisateur;
};