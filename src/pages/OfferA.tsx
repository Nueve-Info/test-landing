import { OfferLanding } from './OfferLanding'
import { offers } from '../config/offerConfig'

export function OfferA() {
  return <OfferLanding offer={offers.a} />
}
