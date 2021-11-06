import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'
import { FileService } from "./file/file.service";
import { TrackModule } from "./track/track.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb+srv://admin:nastya81@cluster0.0cqtl.mongodb.net/music_next?retryWrites=true&w=majority'),
    TrackModule,
    FileService
  ]
})
export class AppModule { }