export = bufferImporter;
/**
 * @typedef {import('../../types').BufferImporter} BufferImporter
 */
/**
 * @type {BufferImporter}
 */
declare function bufferImporter(file: import("../../types").File, block: import("interface-blockstore/dist/src/types").Blockstore, options: import("../../types").ImporterOptions): AsyncIterable<() => Promise<import("../../types").InProgressImportResult>>;
declare namespace bufferImporter {
    export { BufferImporter };
}
type BufferImporter = import('../../types').BufferImporter;
//# sourceMappingURL=buffer-importer.d.ts.map