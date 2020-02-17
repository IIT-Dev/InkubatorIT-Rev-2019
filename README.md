## Usage

1. Install dependencies with `yarn install`
2. Run with `yarn dev`

## Deploy

1. Make sure you login in Heroku CLI as respective Inkubator IT account
2. Add new commit
3. Deploy with `git push heroku master`

## Add or Edit Question

1. Open `\src\data\request.ts`
2. Update `questions` array

| key            |                          type                          |                                                 description |
| -------------- | :----------------------------------------------------: | ----------------------------------------------------------: |
| label          |                         string                         |         Question text that will be showed above input field |
| id             |                         string                         |                                 id of question, must unique |
| column         |                         string                         |                   matched with respective Sheet column name |
| type           | text \| email \| date \| textarea \| radio \| checkbox |                                               type of input |
| defaultValue   |                         string                         |                     initial value when input first rendered |
| isRequired     |                        boolean                         |                  User can't submit if this input not filled |
| condition      |                    { [id]: string }                    |              Only displayed when all condition is fulfilled |
| shouldRecorded |                        boolean                         |                If false that mean will not be send to Sheet |
| options        |                       string[ ]                        | For radio and checkbox, list of option that user can select |
| hasCustomInput |                        boolean                         | For radio and checkbox, if user want to input a custom text |
