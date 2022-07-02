export = treeBuilder;
/**
 * @type {TreeBuilder}
 */
declare function treeBuilder(source: AsyncIterable<import("./types").InProgressImportResult>, block: import("interface-blockstore/dist/src/types").Blockstore, options: import("./types").ImporterOptions): AsyncIterable<import("./types").ImportResult>;
declare namespace treeBuilder {
    export { ImportResult, InProgressImportResult, ImporterOptions, Blockstore, TreeBuilder };
}
type ImportResult = import('./types').ImportResult;
type InProgressImportResult = import('./types').InProgressImportResult;
type ImporterOptions = import('./types').ImporterOptions;
type Blockstore = import('interface-blockstore').Blockstore;
type TreeBuilder = (source: AsyncIterable<InProgressImportResult>, blockstore: Blockstore, options: ImporterOptions) => AsyncIterable<ImportResult>;
//# sourceMappingURL=tree-builder.d.ts.map