export declare class CreateAgentAvailabilityDto {
    agentId: number;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
}
export declare class UpdateAgentAvailabilityDto {
    startTime?: string;
    endTime?: string;
}
export declare class CreateAgentPreferredPropertyDto {
    agentId: number;
    propertyId: number;
}
export declare class AgentAvailabilityQueryDto {
    agentId?: number;
    dayOfWeek?: number;
}
