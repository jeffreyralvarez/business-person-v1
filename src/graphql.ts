
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract getPerson(id: string): string | Promise<string>;
}

export abstract class IMutation {
    abstract createPerson(person: string): string | Promise<string>;
}

type Nullable<T> = T | null;
