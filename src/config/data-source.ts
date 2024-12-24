import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'Aa@123456',
  database: 'real-world',
  synchronize: false,
  logging: true,
  entities: ['dist/**/*.entity.js', 'src/**/*.entity.ts'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  seeds: ['src/database/seeds/*{.ts,.js}'], // Đường dẫn tới thư mục chứa seeds
  factories: ['src/database/factories/*{.ts,.js}'], // Nếu có dùng factories
} as DataSourceOptions & SeederOptions);

export default AppDataSource;
