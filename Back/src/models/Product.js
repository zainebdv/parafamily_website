// TODO: PostgreSQL schema for products table
// CREATE TABLE products (
//   id             SERIAL PRIMARY KEY,
//   name           VARCHAR(200) NOT NULL,
//   category_id    INTEGER REFERENCES categories(id),
//   price          NUMERIC(10,3) NOT NULL,   -- Tunisian Dinars, 3 decimals
//   original_price NUMERIC(10,3),            -- NULL if no discount
//   rating         NUMERIC(3,2) DEFAULT 0,
//   reviews        INTEGER DEFAULT 0,
//   featured       BOOLEAN DEFAULT FALSE,
//   image_url      TEXT,
//   description    TEXT,
//   stock          INTEGER DEFAULT 0,
//   created_at     TIMESTAMPTZ DEFAULT NOW()
// );
//
// Export helper query functions, e.g.:
//   findAll({ category, search, sort })
//   findById(id)
//   create(data)
//   update(id, data)
//   remove(id)
