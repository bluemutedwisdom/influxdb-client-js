import {
  ScraperTargetRequest,
  ScraperTargetResponse,
  ScraperTargetsApi,
} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: ScraperTargetsApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new ScraperTargetsApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async getAll(orgID: string): Promise<ScraperTargetResponse[]> {
    const {
      data: {configurations},
    } = await this.service.scrapersGet(
      undefined,
      undefined,
      undefined,
      orgID,
      undefined,
      this.serviceOptions
    )

    return configurations || []
  }

  public async create(
    request: ScraperTargetRequest
  ): Promise<ScraperTargetResponse> {
    const {data} = await this.service.scrapersPost(
      request,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async update(
    id: string,
    changes: ScraperTargetRequest
  ): Promise<ScraperTargetResponse> {
    const {data} = await this.service.scrapersScraperTargetIDPatch(
      id,
      changes,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.scrapersScraperTargetIDDelete(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }
}
