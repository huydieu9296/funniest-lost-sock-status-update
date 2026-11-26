# Funniest Lost Sock Status Update

![Bounty](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.svg)
![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/huydieu9296/funniest-lost-sock-status-update/rank.svg)
![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/huydieu9296/funniest-lost-sock-status-update/reward.svg)

A one-line status update from a sock that went missing behind the dryer
and decided it was never coming back.

## The entry

> Day 47 behind the dryer: the lint adopted me, my pair eloped with a washcloth, and honestly, single life fits.

110 characters — inside the 120-character limit.

## Why it works

The joke runs on three beats: a survival-log opener ("Day 47"), a found
family (the lint adopted the sock), and a betrayal twist (the pair eloped
with a washcloth). The punchline lands on acceptance — the lost sock is
not asking to be rescued, it has simply moved on, single and unbothered.

## Files

- `entry.txt` — the final one-liner (110 characters)
- `main.ts` — validator: checks the 120-character limit and writes the
  validated entry to the output directory
- `package.json` — `node main.ts` runs the validator

## Run the validator

```sh
node main.ts
```

It reads `entry.txt`, checks the 120-character limit, and writes the
validated entry to `$MAKEFUN_OUTPUT_DIR` (default `/output`).
