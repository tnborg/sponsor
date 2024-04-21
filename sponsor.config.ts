import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: '历史赞助商及支持者',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: '支持者',
      preset: presets.small,
    },
    {
      title: '铜牌赞助商',
      monthlyDollars: 3,
      preset: presets.base,
    },
    {
      title: '银牌赞助商',
      monthlyDollars: 7,
      preset: presets.medium,
    },
    {
      title: '金牌赞助商',
      monthlyDollars: 15,
      preset: presets.large,
    },
    {
      title: '铂金赞助商',
      monthlyDollars: 30,
      preset: presets.xl,
    },
  ],
})