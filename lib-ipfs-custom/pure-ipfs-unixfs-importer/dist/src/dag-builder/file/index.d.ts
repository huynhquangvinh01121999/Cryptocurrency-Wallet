export = fileBuilder;
/**
 * @type {import('../../types').UnixFSV1DagBuilder<File>}
 */
declare function fileBuilder(file: import("../../types").File, block: import("interface-blockstore/dist/src/types").Blockstore, options: import("../../types").ImporterOptions): Promise<import("../../types").InProgressImportResult>;
declare namespace fileBuilder {
    export { Blockstore, File, ImporterOptions, Reducer, DAGBuilder, FileDAGBuilder };
}
type Blockstore = import('interface-blockstore').Blockstore;
type File = import('../../types').File;
type ImporterOptions = import('../../types').ImporterOptions;
type Reducer = import('../../types').Reducer;
type DAGBuilder = import('../../types').DAGBuilder;
type FileDAGBuilder = import('../../types').FileDAGBuilder;
//# sourceMappingURL=index.d.ts.map