import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';

import { EntityNotFoundError, TypeORMError } from 'typeorm';

@Catch(TypeORMError)
export class TypeOrmFilter implements ExceptionFilter {
  catch(exception: TypeORMError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const code: string = (exception as any).code;
    const detail: string = (exception as any).detail;

    const customResponse: { status: HttpStatus, message: string, type: string, timestamp: string } = {
      timestamp: new Date().toISOString(),
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Something Went Wrong',
      type: 'Internal Server Error',
    };

    if (exception instanceof EntityNotFoundError) {
      customResponse.status = HttpStatus.NOT_FOUND;
      customResponse.message = 'Entity not found';
      customResponse.type = 'Not found';
    }

    switch (code) {
      case '23505': {
        const duplicateFieldName = (/\(([^)]+)\)/).exec(detail)[0];

        customResponse.status = HttpStatus.BAD_REQUEST;
        customResponse.message = `Such ${duplicateFieldName} already exists`;
        customResponse.type = 'Field duplication conflict';
        break;
      }
      default: break;
    }

    response.status(customResponse.status).json(customResponse);
  }
}
