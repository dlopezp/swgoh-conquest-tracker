const keycardsByZone = (zone) => {
  return zone.reduce(
    (carry, feat) => carry + feat.keycards,
    0
  )
}

const keycardsBySector = (sector) => {
  return 66 +
    keycardsByZone(sector.nodesFeats) +
    keycardsByZone(sector.minibossFeats) +
    keycardsByZone(sector.bossFeats)
}

const keycardsByConquest = (conquest) => {
  return keycardsBySector(conquest.sector1) +
    keycardsBySector(conquest.sector2) +
    keycardsBySector(conquest.sector3) +
    keycardsBySector(conquest.sector4) +
    keycardsBySector(conquest.sector5) +
    keycardsByZone(conquest.global.feats)
}

export {
  keycardsByConquest,
  keycardsByZone,
  keycardsBySector
}
