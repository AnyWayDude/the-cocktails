class HttpBase {
  public load(path: string): Promise<Response> {
    return fetch(path);
  }
}

export { HttpBase };
