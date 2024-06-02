import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: '历史赞助商及支持者',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: '支持者',
      preset: tierPresets.small,
    },
    {
      title: '铜牌赞助商',
      monthlyDollars: 3,
      preset: tierPresets.base,
    },
    {
      title: '银牌赞助商',
      monthlyDollars: 7,
      preset: tierPresets.medium,
    },
    {
      title: '金牌赞助商',
      monthlyDollars: 15,
      preset: tierPresets.large,
    },
    {
      title: '铂金赞助商',
      monthlyDollars: 30,
      preset: tierPresets.xl,
    },
  ],
})
