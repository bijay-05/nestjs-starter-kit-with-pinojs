import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import Joi from "joi";
import { ErrorModule } from "./error/error.module";
import { DebuggerModule } from "./debugger/debugger.module";
import { LoggerModule } from "src/common/logger/logger.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
            // validationSchema: Joi.object({
            //     APP_ENV: Joi.string()
            //         .valid(['development','production'])
            //         .default('development'),
            //         // .required(),
            //     LOG_LEVEL: Joi.string()
            //         .valid(['error','info','debug'])
            //         .default('info')
            //         // .required()
            // }),
            // validationOptions: {
            //     allowUnknown: true,
            //     abortEarly: true
            // }
        }),
        ErrorModule,
        DebuggerModule,
        LoggerModule
    ]
})
export class CommonModule {}