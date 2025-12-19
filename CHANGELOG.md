# Changelog

## 2.0.0 (2025-12-19)

Full Changelog: [v1.0.0...v2.0.0](https://github.com/PierceLanternStudios/staging-test-prod/compare/v1.0.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **mcp:** add detail field to docs search tool ([84cddd3](https://github.com/PierceLanternStudios/staging-test-prod/commit/84cddd347e3fb11c7a0ff74444c303ab77bc5cb4))
* **mcp:** add typescript check to code execution tool ([bf72c3a](https://github.com/PierceLanternStudios/staging-test-prod/commit/bf72c3a21fca87ff2e44f571d30b77b0a44d055c))
* **mcp:** handle code mode calls in the Stainless API ([7cc31d4](https://github.com/PierceLanternStudios/staging-test-prod/commit/7cc31d43a93babad34fe9a90ad51935198c68a6a))
* **mcp:** return logs on code tool errors ([c2d9548](https://github.com/PierceLanternStudios/staging-test-prod/commit/c2d95481691e6cb28d4814b7eb653239d653ac97))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([79d18bb](https://github.com/PierceLanternStudios/staging-test-prod/commit/79d18bb3390541580158dacedac137a6345b8348))
* **mcp:** correct code tool API endpoint ([e06cd9b](https://github.com/PierceLanternStudios/staging-test-prod/commit/e06cd9b23d49863b45c6c4835477888f1fd9f508))
* **mcp:** pass base url to code tool ([8dbb40a](https://github.com/PierceLanternStudios/staging-test-prod/commit/8dbb40a1f07edf85b7954e54ca5b2307bbdd5305))
* **mcp:** return correct lines on typescript errors ([04ddd64](https://github.com/PierceLanternStudios/staging-test-prod/commit/04ddd64f03f9cf0cdb0d68e0095c2969d3a2f54b))
* **mcp:** return tool execution error on api error ([6fcb18d](https://github.com/PierceLanternStudios/staging-test-prod/commit/6fcb18d6c138ec6e3fc181aa8767634b40d949b8))
* **mcp:** return tool execution error on jq failure ([794ed5f](https://github.com/PierceLanternStudios/staging-test-prod/commit/794ed5fd3ebe06956f2029ca3564a7afeb50afdf))


### Chores

* **client:** fix logger property type ([9800c01](https://github.com/PierceLanternStudios/staging-test-prod/commit/9800c0187fd20bde780691506d381ec76f9a14d5))
* **internal:** codegen related update ([ed83933](https://github.com/PierceLanternStudios/staging-test-prod/commit/ed83933b7c7d5c88e09750ce987d837a470ec2c4))
* **internal:** codegen related update ([61f2f48](https://github.com/PierceLanternStudios/staging-test-prod/commit/61f2f48abbbbd26a5c97d409bff1f944a919a161))
* **internal:** codegen related update ([42e4e00](https://github.com/PierceLanternStudios/staging-test-prod/commit/42e4e0048a03cb158775f3bc27706c56210ca940))
* **internal:** codegen related update ([c22098d](https://github.com/PierceLanternStudios/staging-test-prod/commit/c22098d7642c7c45311f656efbf79b6d89dd3a80))
* **internal:** configure MCP Server hosting ([0396292](https://github.com/PierceLanternStudios/staging-test-prod/commit/039629281050717055e565593e9e8cc20c66bd75))
* **internal:** upgrade eslint ([0f6ca9b](https://github.com/PierceLanternStudios/staging-test-prod/commit/0f6ca9b9154f838b09117bb141a11c6cff1cc4ad))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([b6aae88](https://github.com/PierceLanternStudios/staging-test-prod/commit/b6aae8847de0abdd9f68b18d8f9068d68ff11637))
* **mcp:** add line numbers to code tool errors ([373734c](https://github.com/PierceLanternStudios/staging-test-prod/commit/373734ca9cc83f37db695130802a2ba65bf35aad))
* **mcp:** clarify http auth error ([60cc0b8](https://github.com/PierceLanternStudios/staging-test-prod/commit/60cc0b83e0382e7017ab788c4d36413891b3047a))
* **mcp:** remove deprecated tool schemes ([04f3f40](https://github.com/PierceLanternStudios/staging-test-prod/commit/04f3f40bd238586c49088d046685607859ef510c))
* **mcp:** update lockfile ([953fc32](https://github.com/PierceLanternStudios/staging-test-prod/commit/953fc32a57951b7d171769995563c5fdfb61bc65))
* **mcp:** upgrade jq-web ([9ef1ee8](https://github.com/PierceLanternStudios/staging-test-prod/commit/9ef1ee85c1f95e0c538f3ae614e40c2021cf0a31))
* use latest @modelcontextprotocol/sdk ([7f8f156](https://github.com/PierceLanternStudios/staging-test-prod/commit/7f8f156a528d659921eef105b3ebccbb9aa8d96f))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([3c1b436](https://github.com/PierceLanternStudios/staging-test-prod/commit/3c1b4365f01565a3f8c5024b55764008a0f53105))
* **mcp:** add a README link to add server to VS Code or Claude Code ([83f6169](https://github.com/PierceLanternStudios/staging-test-prod/commit/83f61693255d132957ff2988e75fa15c318f105a))

## 1.0.0 (2025-11-05)

Full Changelog: [v0.0.1...v1.0.0](https://github.com/PierceLanternStudios/staging-test-prod/compare/v0.0.1...v1.0.0)

### Chores

* configure new SDK language ([0bfdc73](https://github.com/PierceLanternStudios/staging-test-prod/commit/0bfdc739ca2b08986a9b99fc75b81930a9cdac78))
* remove custom code ([5818c7a](https://github.com/PierceLanternStudios/staging-test-prod/commit/5818c7a78053b288dcfd5086012028a64981db3b))
* update SDK settings ([84605cb](https://github.com/PierceLanternStudios/staging-test-prod/commit/84605cba875d61d5713bfbfa9fe140e4e368b916))
* update SDK settings ([4d1f8ef](https://github.com/PierceLanternStudios/staging-test-prod/commit/4d1f8eff71081bf55548783ebb27c9d7379c7477))
