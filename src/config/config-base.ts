type EnvironmentSchema = {
  APP: {
    ENVIRONMENT: string;
  };
};

class ConfigBase {
  public ENV: EnvironmentSchema;

  public constructor() {
    this.ENV = this.envSchema;
  }

  private get envSchema(): EnvironmentSchema {
    return {
      APP: {
        ENVIRONMENT: import.meta.env["VITE_APP_NODE_ENV"],
      },
    };
  }
}

export { ConfigBase };
