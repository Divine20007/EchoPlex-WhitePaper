/**
 * ESM entry point for the whitepaper build.
 * Delegates to build.cjs (CommonJS) which contains the full build logic.
 * Usage: cd EchoPlex-WhitePaper && node build.js
 */
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require('./build.cjs');