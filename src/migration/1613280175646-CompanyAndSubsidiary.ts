import {MigrationInterface, QueryRunner} from "typeorm";

export class CompanyAndSubsidiary1613280175646 implements MigrationInterface {
    name = 'CompanyAndSubsidiary1613280175646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `subsidiary` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `short_name` varchar(255) NOT NULL, `status` tinyint(1) NOT NULL DEFAULT '0', `leader` int NOT NULL, `companyId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `company` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `leader` int NOT NULL, `status` tinyint(1) NOT NULL DEFAULT '0', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `subsidiary` ADD CONSTRAINT `FK_9c4cc4baa858844c59e5627f1be` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `subsidiary` DROP FOREIGN KEY `FK_9c4cc4baa858844c59e5627f1be`");
        await queryRunner.query("DROP TABLE `company`");
        await queryRunner.query("DROP TABLE `subsidiary`");
    }

}
