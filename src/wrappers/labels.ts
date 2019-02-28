import { Label as APILabel, LabelsApi } from "../api";

const DEFAULT_LABEL_COLOR = "#326BBA";

interface ILabelProperties {
  color: string;
  description?: string;
}

export const addLabelDefaults = (l: APILabel): Label => ({
  ...l,
  properties: {
    ...l.properties,
    // add defualt color hex if missing
    color: l.properties.color || DEFAULT_LABEL_COLOR,
  },
});

export type Label = APILabel & {properties: ILabelProperties};

export type LabeledResource<R extends {labels?: APILabel[]}> = Exclude<R, "labels"> & {labels?: Label[]};

export default class {
  private service: LabelsApi;

  constructor(basePath: string) {
    this.service = new LabelsApi({ basePath });
  }

  public async get(id: string): Promise<Label> {
    const {data: {label}} = await this.service.labelsLabelIDGet(id);

    if (!label) {
      throw new Error("Failed to get label");
    }

    return addLabelDefaults(label);
  }

  public async getAll(): Promise<Label[]> {
    const {data: {labels}} = await this.service.labelsGet();

    return (labels || []).map(addLabelDefaults);
  }

  public async create(name: string, properties: ILabelProperties): Promise<Label> {
    const {data: { label }} = await this.service.labelsPost({name, properties});

    if (!label) {
      throw new Error("Failed to create label");
    }

    return addLabelDefaults(label);
  }

  public async update(id: string, properties: ILabelProperties) {
    const {data: {label}} = await this.service.labelsLabelIDPatch(id, {properties});

    if (!label) {
      throw new Error("Failed to update label");
    }

    return addLabelDefaults(label);
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.labelsLabelIDDelete(id);

    return data;
  }
}
