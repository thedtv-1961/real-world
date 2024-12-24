import { Tag } from '../../tags/tag.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class TagSeeder1735017380986 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const a = await dataSource.getRepository(Tag).find();
        console.log('TagSeeder1735017380986 is running');
        console.log(a);
    }
}
