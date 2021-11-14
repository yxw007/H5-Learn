export default function loader(source) {
  const options = this.getOptions();

  console.log("xxxxxxxxxxxxx");

  source = source.replace(/\[name\]/g, options.name);

  return `export default ${JSON.stringify(source)}`;
}