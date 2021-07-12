## day01(2021.07.12.Mon)

1. install node
   >install: https://nodejs.org/ko/download/<br>
2. install postgresql
   > install: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads<br>
   > how to: https://dog-developers.tistory.com/122<br>
   > usage: http://www.devkuma.com/books/pages/1430<br>
   > auth error? >> http://www.devkuma.com/books/pages/461<br>
3. set NestJS
   > ## 1) in root folder dir...<br>
   > Document: https://docs.nestjs.kr/
   > <console command>
   > ```
   > $ nest new ft-transcendence(package manager: npm); cd ft-transcendence
   > $ npm i -g @nestjs/cli
   > ```
   > ## 2) in "tsconfig.json"
   > add <span style="color:red">"esModuleInterop": true, </span><br>
   >## <변경점만 재빌드하기 - hot reloading 설정>
   >## 3) in root folder dir...<br>
   > ```
   > $ npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack
   > ```
   >## 4) make "webpack-hmr.config.js"
   > copy and paste <span style="color:red"> Configuration </span><br>
   > https://docs.nestjs.com/recipes/hot-reload#configuration
   > 
   >## 5) mod "src/main.ts"
   > ```typescript
   > import { NestFactory } from '@nestjs/core';
   > import { AppModule } from './app.module';
   > declare const module: any;
   > async function bootstrap() {
   >   const app = await NestFactory.create(AppModule);
   >   await app.listen(3000);
   >
   >   if (module.hot) {
   >     module.hot.accept();
   >     module.hot.dispose(() => app.close());
   >   }
   > }
   >bootstrap();
   >
   > ```
   >## 6) add in "package.json"
   > copy and paste <span style="color:red"> "start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch" </span><br>
   > backup the original command to <span style="color:blue"> "start:dev-backup": "nest start --watch" </span><br>
   > ```
   > $ nest build --webpack --webpackPath webpack-hmr.config.js
   > ```
   >## dotenv 설정(SECRET_KEY 등의 process.env 설정)
   >## 7) [in root folder dir] set configuration<br>
   >install: https://docs.nestjs.com/techniques/configuration#getting-started
   >```
   > $ npm i --save @nestjs/config
   >```
   >[in src/app.module.ts]
   > ```typescript
   > import { Module } from '@nestjs/common';
   >import { AppController } from './app.controller';
   >import { AppService } from './app.service';
   >import { ConfigModule } from '@nestjs/config';
   >
   >@Module({
   >  imports: [ConfigModule.forRoot()],
   >  controllers: [AppController],
   >  providers: [AppService],
   >})
   >export class AppModule {}
   >```
   >make <span style="color:red">'.env'</span> file in root dir<br>
   > .env file에는 42api에서 얻은 api key에 대한 정보를 저장해놓고 써도 괜찮을 듯하다..!<br>
   > ![image][./photo/42api.png]
   >## 8) in src dir...<br>
   >make module with CRUD using nest
   >```
   >$ nest g resource <module name>
   >$ // transport layer >> importselect 'REST API'
   >```


