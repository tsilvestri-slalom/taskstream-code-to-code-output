# Task Stream - Code to Code - Output App

This app is intended to be used as the output for a code to code conversion (Angular to React).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Installation
`npm i`

## Running the app
`npm run start`

## For use in Task Stream
#### config.yml
config.yml will look something like:
```
artifact_providers:
  - name: local-prompt
    provider: local-file-system
    root: source/{project_id}
  - name: local-input
    provider: local-file-system
    root: ../taskstream-code-to-code-input/src
  - name: local-output
    provider: local-file-system
    root: ../taskstream-code-to-code-output/src
  - name: jira-tskstrm
    provider: jira
    api_user: tonys@slalom.com
    api_key_name: TSKSTRM_JIRA_API_KEY
    project_id: TSKSTRM
    base_url: https://www.slalom.atlassian.net
```
Where the root paths are relative to the taskstream root.

#### process.json file
process.json file will look like something similar to:
```
{
          "taskId": "TS1",
          "action": "split",
          "description": "Splitting for files",
          "split": {
            "mode": "each",
            "target": {
              "type": "fileset",
              "provider": "local-input",
              "resource": "app",
              "description": "Directory containing sample angular code",
              "properties": {
                "filters": [
                  {
                    "filter": "include",
                    "globs": [
                      "*.component.scss"
                    ]
                  }
                ]
              }
            }
          },
          "predecessor_context_limit": "1"
        },
```