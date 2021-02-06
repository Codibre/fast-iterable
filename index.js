const toExport = Object.entries(require('@codibre/fluent-iterable'));

for (const [key, value] of toExport) {
    exports[key] = value;
}