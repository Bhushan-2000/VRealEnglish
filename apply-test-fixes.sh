#!/bin/bash

echo "Applying comprehensive test fixes..."

# Update tsconfig.spec.json to exclude problematic paths
cat > tsconfig.spec.json << 'TSCONFIG'
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
TSCONFIG

# Update .gitignore
echo "" >> .gitignore
echo "# Chrome test cache" >> .gitignore
echo "\${local_app_data}" >> .gitignore
echo "**/Chrome/Cache" >> .gitignore

echo "✓ Test configuration updated"
echo "Run test fixes script to update all test files"
