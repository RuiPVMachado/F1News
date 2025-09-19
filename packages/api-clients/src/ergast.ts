export type ErgastSeason = string

export async function getErgastSeason(): Promise<ErgastSeason> {
  const res = await fetch('https://ergast.com/api/f1/current.json', {
    headers: { 'accept': 'application/json' }
  })
  if (!res.ok) throw new Error(`Ergast API error: ${res.status}`)
  const json = await res.json()
  const season = json?.MRData?.StandingsTable?.season || json?.MRData?.RaceTable?.season
  return season ?? 'unknown'
}
