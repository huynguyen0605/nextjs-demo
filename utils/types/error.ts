export class BaseError extends Error {
    constructor(public message: string, public code?: number) {
      super(message);
  
      Object.defineProperty(this, "name", {
        value: new.target.name,
        enumerable: false,
        configurable: true,
      });
  
      if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(this, new.target.prototype);
      } else {
        (this as any).__proto__ = new.target.prototype;
      }
  
      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export interface IError extends Error {
    message: string;
    status?: number;
    data?: any;
  }
  