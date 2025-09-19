import { hello } from '@packages/shared'
import { getErgastSeason } from '@packages/api-clients'

export default async function Page() {
  const greeting = hello('Next.js')
  // Example call to shared API client (non-blocking demo)
  const season = await getErgastSeason().catch(() => 'unknown')

  return (
    <div>
      <h1>Welcome to Next Dashboard</h1>
      <p>{greeting}</p>
      <p>Current F1 season (from Ergast API): {season}</p>
    </div>
  )
}
