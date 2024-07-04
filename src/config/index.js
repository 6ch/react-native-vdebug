import packagejson from '../../package.json';

export default {
  APPINFO: {
    name: packagejson.name,
    author: packagejson.author,
    homepage: 'https://6ch.com',
    repository: packagejson.repository.url,
    description: packagejson.description,
    version: packagejson.version
  }
};
