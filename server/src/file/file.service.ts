import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

export enum FileType {
  AUDI0 = 'audio',
  IMAGE = 'image'
}

@Injectable()
export class FileService {

  createFile(type: FileType, file): string {
    try {
      const fileExtension = file.originalname.split('.').pop()
      const fileName = uuid.v4() + '.' + fileExtension
      const failPath = path.resolve(__dirname, '..', 'static', type)
      if (!fs.existsSync(failPath)) {
        fs.mkdirSync(failPath, { recursive: true })
      }
      fs.writeFileSync(path.resolve(failPath, fileName), file.buffer)
      return type + '/' + fileName
    }
    catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  removeFile(filename: string) {

  }
}