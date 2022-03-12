# telegram-bnb-staking-parser
A parser for telegram messages from staking bnb on trust wallet

## Reason for creating this repo

Bnb staking through trust wallet, tracking staking history had to be done through telegram
([why](https://community.trustwallet.com/t/dont-see-any-bnb-staking-rewards/218721))
Used telegram to keep track of rewards, then will parse rewards for year
(tax purposes)

### MVP features


#### Upload json from telegram export ( needed to make the calculations)

Allow the user to upload the exported chat history with the telegram bot.
The telegram export current as of 03/12/22.

#### Parse json for staking rewards

Once the uploaded json file is deemed valid, parse the json to have an entry for
each stacking reward and create a corresponding object.

#### Export rewards to csv (with format to specify)

Once objects have been created, allow user to export to csv for desired crypto
tax reporting application (only doing this for cryptotrader.tax for now).


### Nice to have

#### Custom Ranges

The current implementation will involve year over year costs. having custom
ranges is not essential since taxes are calculated on an annual basis.

#### Clean telegram parsing history

The current implementation will involve manual verification that data is clean.
Looking into automating this process is not essential for now.
