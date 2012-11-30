/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

AWS = {};

/**
 * @!method countClosedWorkflowExecutions(params, options)
 *   Calls the CountClosedWorkflowExecutions API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +startTimeFilter+ - (<tt>Object</tt>)
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +closeTimeFilter+ - (<tt>Object</tt>)
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +executionFilter+ - (<tt>Object</tt>)
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *     * +typeFilter+ - (<tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (<tt>String</tt>)
 *     * +tagFilter+ - (<tt>Object</tt>)
 *       * +tag+ - (*required*, <tt>String</tt>)
 *     * +closeStatusFilter+ - (<tt>Object</tt>)
 *       * +status+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +count+ - (*required*, <tt>Integer</tt>)
 *     * +truncated+ - (<tt>Boolean</tt>)
 *
 * @!method countOpenWorkflowExecutions(params, options)
 *   Calls the CountOpenWorkflowExecutions API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +startTimeFilter+ - (*required*, <tt>Object</tt>)
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +typeFilter+ - (<tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (<tt>String</tt>)
 *     * +tagFilter+ - (<tt>Object</tt>)
 *       * +tag+ - (*required*, <tt>String</tt>)
 *     * +executionFilter+ - (<tt>Object</tt>)
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +count+ - (*required*, <tt>Integer</tt>)
 *     * +truncated+ - (<tt>Boolean</tt>)
 *
 * @!method countPendingActivityTasks(params, options)
 *   Calls the CountPendingActivityTasks API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +taskList+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +count+ - (*required*, <tt>Integer</tt>)
 *     * +truncated+ - (<tt>Boolean</tt>)
 *
 * @!method countPendingDecisionTasks(params, options)
 *   Calls the CountPendingDecisionTasks API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +taskList+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +count+ - (*required*, <tt>Integer</tt>)
 *     * +truncated+ - (<tt>Boolean</tt>)
 *
 * @!method deprecateActivityType(params, options)
 *   Calls the DeprecateActivityType API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +activityType+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deprecateDomain(params, options)
 *   Calls the DeprecateDomain API operation.
 *   @param [Object] params
 *     * +name+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method deprecateWorkflowType(params, options)
 *   Calls the DeprecateWorkflowType API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +workflowType+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method describeActivityType(params, options)
 *   Calls the DescribeActivityType API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +activityType+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +typeInfo+ - (*required*, <tt>Object</tt>)
 *       * +activityType+ - (*required*, <tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *         * +version+ - (*required*, <tt>String</tt>)
 *       * +status+ - (*required*, <tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +creationDate+ - (*required*, <tt>Date</tt>)
 *       * +deprecationDate+ - (<tt>Date</tt>)
 *     * +configuration+ - (*required*, <tt>Object</tt>)
 *       * +defaultTaskStartToCloseTimeout+ - (<tt>String</tt>)
 *       * +defaultTaskHeartbeatTimeout+ - (<tt>String</tt>)
 *       * +defaultTaskList+ - (<tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *       * +defaultTaskScheduleToStartTimeout+ - (<tt>String</tt>)
 *       * +defaultTaskScheduleToCloseTimeout+ - (<tt>String</tt>)
 *
 * @!method describeDomain(params, options)
 *   Calls the DescribeDomain API operation.
 *   @param [Object] params
 *     * +name+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +domainInfo+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +status+ - (*required*, <tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *     * +configuration+ - (*required*, <tt>Object</tt>)
 *       * +workflowExecutionRetentionPeriodInDays+ - (*required*,
 *         <tt>String</tt>)
 *
 * @!method describeWorkflowExecution(params, options)
 *   Calls the DescribeWorkflowExecution API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +execution+ - (*required*, <tt>Object</tt>)
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *       * +runId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +executionInfo+ - (*required*, <tt>Object</tt>)
 *       * +execution+ - (*required*, <tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (*required*, <tt>String</tt>)
 *       * +workflowType+ - (*required*, <tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *         * +version+ - (*required*, <tt>String</tt>)
 *       * +startTimestamp+ - (*required*, <tt>Date</tt>)
 *       * +closeTimestamp+ - (<tt>Date</tt>)
 *       * +executionStatus+ - (*required*, <tt>String</tt>)
 *       * +closeStatus+ - (<tt>String</tt>)
 *       * +parent+ - (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (*required*, <tt>String</tt>)
 *       * +tagList+ - (<tt>Array<String></tt>)
 *       * +cancelRequested+ - (<tt>Boolean</tt>)
 *     * +executionConfiguration+ - (*required*, <tt>Object</tt>)
 *       * +taskStartToCloseTimeout+ - (*required*, <tt>String</tt>)
 *       * +executionStartToCloseTimeout+ - (*required*, <tt>String</tt>)
 *       * +taskList+ - (*required*, <tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *       * +childPolicy+ - (*required*, <tt>String</tt>)
 *     * +openCounts+ - (*required*, <tt>Object</tt>)
 *       * +openActivityTasks+ - (*required*, <tt>Integer</tt>)
 *       * +openDecisionTasks+ - (*required*, <tt>Integer</tt>)
 *       * +openTimers+ - (*required*, <tt>Integer</tt>)
 *       * +openChildWorkflowExecutions+ - (*required*, <tt>Integer</tt>)
 *     * +latestActivityTaskTimestamp+ - (<tt>Date</tt>)
 *     * +latestExecutionContext+ - (<tt>String</tt>)
 *
 * @!method describeWorkflowType(params, options)
 *   Calls the DescribeWorkflowType API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +workflowType+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +typeInfo+ - (*required*, <tt>Object</tt>)
 *       * +workflowType+ - (*required*, <tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *         * +version+ - (*required*, <tt>String</tt>)
 *       * +status+ - (*required*, <tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +creationDate+ - (*required*, <tt>Date</tt>)
 *       * +deprecationDate+ - (<tt>Date</tt>)
 *     * +configuration+ - (*required*, <tt>Object</tt>)
 *       * +defaultTaskStartToCloseTimeout+ - (<tt>String</tt>)
 *       * +defaultExecutionStartToCloseTimeout+ - (<tt>String</tt>)
 *       * +defaultTaskList+ - (<tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *       * +defaultChildPolicy+ - (<tt>String</tt>)
 *
 * @!method getWorkflowExecutionHistory(params, options)
 *   Calls the GetWorkflowExecutionHistory API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +execution+ - (*required*, <tt>Object</tt>)
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *       * +runId+ - (*required*, <tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *     * +maximumPageSize+ - (<tt>Integer</tt>)
 *     * +reverseOrder+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +events+ - (*required*, <tt>Array<Object></tt>)
 *       * +eventTimestamp+ - (*required*, <tt>Date</tt>)
 *       * +eventType+ - (*required*, <tt>String</tt>)
 *       * +eventId+ - (*required*, <tt>Integer</tt>)
 *       * +workflowExecutionStartedEventAttributes+ - (<tt>Object</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +continuedExecutionRunId+ - (<tt>String</tt>)
 *         * +parentWorkflowExecution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +parentInitiatedEventId+ - (<tt>Integer</tt>)
 *       * +workflowExecutionCompletedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +result+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +completeWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +workflowExecutionFailedEventAttributes+ - (<tt>Object</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +failWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +workflowExecutionTimedOutEventAttributes+ - (<tt>Object</tt>)
 *         * +timeoutType+ - (*required*, <tt>String</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *       * +workflowExecutionCanceledEventAttributes+ - (<tt>Object</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +cancelWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +workflowExecutionContinuedAsNewEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +newExecutionRunId+ - (*required*, <tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *       * +continueAsNewWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +workflowExecutionTerminatedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (<tt>String</tt>)
 *       * +workflowExecutionCancelRequestedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +externalWorkflowExecution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +externalInitiatedEventId+ - (<tt>Integer</tt>)
 *         * +cause+ - (<tt>String</tt>)
 *       * +decisionTaskScheduledEventAttributes+ - (<tt>Object</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +startToCloseTimeout+ - (<tt>String</tt>)
 *       * +decisionTaskStartedEventAttributes+ - (<tt>Object</tt>)
 *         * +identity+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *       * +decisionTaskCompletedEventAttributes+ - (<tt>Object</tt>)
 *         * +executionContext+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +decisionTaskTimedOutEventAttributes+ - (<tt>Object</tt>)
 *         * +timeoutType+ - (*required*, <tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +activityTaskScheduledEventAttributes+ - (<tt>Object</tt>)
 *         * +activityType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +scheduleToStartTimeout+ - (<tt>String</tt>)
 *         * +scheduleToCloseTimeout+ - (<tt>String</tt>)
 *         * +startToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +heartbeatTimeout+ - (<tt>String</tt>)
 *       * +activityTaskStartedEventAttributes+ - (<tt>Object</tt>)
 *         * +identity+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *       * +activityTaskCompletedEventAttributes+ - (<tt>Object</tt>)
 *         * +result+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +activityTaskFailedEventAttributes+ - (<tt>Object</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +activityTaskTimedOutEventAttributes+ - (<tt>Object</tt>)
 *         * +timeoutType+ - (*required*, <tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +details+ - (<tt>String</tt>)
 *       * +activityTaskCanceledEventAttributes+ - (<tt>Object</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +latestCancelRequestedEventId+ - (<tt>Integer</tt>)
 *       * +activityTaskCancelRequestedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *       * +workflowExecutionSignaledEventAttributes+ - (<tt>Object</tt>)
 *         * +signalName+ - (*required*, <tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +externalWorkflowExecution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +externalInitiatedEventId+ - (<tt>Integer</tt>)
 *       * +markerRecordedEventAttributes+ - (<tt>Object</tt>)
 *         * +markerName+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +timerStartedEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +startToFireTimeout+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +timerFiredEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +timerCanceledEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +startChildWorkflowExecutionInitiatedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *       * +childWorkflowExecutionStartedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionCompletedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +result+ - (<tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionTimedOutEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +timeoutType+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionCanceledEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionTerminatedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +signalExternalWorkflowExecutionInitiatedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +signalName+ - (*required*, <tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +externalWorkflowExecutionSignaledEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +signalExternalWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +externalWorkflowExecutionCancelRequestedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *       *
 *         +requestCancelExternalWorkflowExecutionInitiatedEventAttributes+
 *         - (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +requestCancelExternalWorkflowExecutionFailedEventAttributes+
 *         - (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +scheduleActivityTaskFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +activityType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +requestCancelActivityTaskFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +startTimerFailedEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +cancelTimerFailedEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +startChildWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *
 * @!method listActivityTypes(params, options)
 *   Calls the ListActivityTypes API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +name+ - (<tt>String</tt>)
 *     * +registrationStatus+ - (*required*, <tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *     * +maximumPageSize+ - (<tt>Integer</tt>)
 *     * +reverseOrder+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +typeInfos+ - (*required*, <tt>Array<Object></tt>)
 *       * +activityType+ - (*required*, <tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *         * +version+ - (*required*, <tt>String</tt>)
 *       * +status+ - (*required*, <tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +creationDate+ - (*required*, <tt>Date</tt>)
 *       * +deprecationDate+ - (<tt>Date</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *
 * @!method listClosedWorkflowExecutions(params, options)
 *   Calls the ListClosedWorkflowExecutions API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +startTimeFilter+ - (<tt>Object</tt>)
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +closeTimeFilter+ - (<tt>Object</tt>)
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +executionFilter+ - (<tt>Object</tt>)
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *     * +closeStatusFilter+ - (<tt>Object</tt>)
 *       * +status+ - (*required*, <tt>String</tt>)
 *     * +typeFilter+ - (<tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (<tt>String</tt>)
 *     * +tagFilter+ - (<tt>Object</tt>)
 *       * +tag+ - (*required*, <tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *     * +maximumPageSize+ - (<tt>Integer</tt>)
 *     * +reverseOrder+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +executionInfos+ - (*required*, <tt>Array<Object></tt>)
 *       * +execution+ - (*required*, <tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (*required*, <tt>String</tt>)
 *       * +workflowType+ - (*required*, <tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *         * +version+ - (*required*, <tt>String</tt>)
 *       * +startTimestamp+ - (*required*, <tt>Date</tt>)
 *       * +closeTimestamp+ - (<tt>Date</tt>)
 *       * +executionStatus+ - (*required*, <tt>String</tt>)
 *       * +closeStatus+ - (<tt>String</tt>)
 *       * +parent+ - (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (*required*, <tt>String</tt>)
 *       * +tagList+ - (<tt>Array<String></tt>)
 *       * +cancelRequested+ - (<tt>Boolean</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *
 * @!method listDomains(params, options)
 *   Calls the ListDomains API operation.
 *   @param [Object] params
 *     * +nextPageToken+ - (<tt>String</tt>)
 *     * +registrationStatus+ - (*required*, <tt>String</tt>)
 *     * +maximumPageSize+ - (<tt>Integer</tt>)
 *     * +reverseOrder+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +domainInfos+ - (*required*, <tt>Array<Object></tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +status+ - (*required*, <tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *
 * @!method listOpenWorkflowExecutions(params, options)
 *   Calls the ListOpenWorkflowExecutions API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +startTimeFilter+ - (*required*, <tt>Object</tt>)
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +typeFilter+ - (<tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (<tt>String</tt>)
 *     * +tagFilter+ - (<tt>Object</tt>)
 *       * +tag+ - (*required*, <tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *     * +maximumPageSize+ - (<tt>Integer</tt>)
 *     * +reverseOrder+ - (<tt>Boolean</tt>)
 *     * +executionFilter+ - (<tt>Object</tt>)
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +executionInfos+ - (*required*, <tt>Array<Object></tt>)
 *       * +execution+ - (*required*, <tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (*required*, <tt>String</tt>)
 *       * +workflowType+ - (*required*, <tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *         * +version+ - (*required*, <tt>String</tt>)
 *       * +startTimestamp+ - (*required*, <tt>Date</tt>)
 *       * +closeTimestamp+ - (<tt>Date</tt>)
 *       * +executionStatus+ - (*required*, <tt>String</tt>)
 *       * +closeStatus+ - (<tt>String</tt>)
 *       * +parent+ - (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (*required*, <tt>String</tt>)
 *       * +tagList+ - (<tt>Array<String></tt>)
 *       * +cancelRequested+ - (<tt>Boolean</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *
 * @!method listWorkflowTypes(params, options)
 *   Calls the ListWorkflowTypes API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +name+ - (<tt>String</tt>)
 *     * +registrationStatus+ - (*required*, <tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *     * +maximumPageSize+ - (<tt>Integer</tt>)
 *     * +reverseOrder+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +typeInfos+ - (*required*, <tt>Array<Object></tt>)
 *       * +workflowType+ - (*required*, <tt>Object</tt>)
 *         * +name+ - (*required*, <tt>String</tt>)
 *         * +version+ - (*required*, <tt>String</tt>)
 *       * +status+ - (*required*, <tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +creationDate+ - (*required*, <tt>Date</tt>)
 *       * +deprecationDate+ - (<tt>Date</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *
 * @!method pollForActivityTask(params, options)
 *   Calls the PollForActivityTask API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +taskList+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +identity+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +taskToken+ - (*required*, <tt>String</tt>)
 *     * +activityId+ - (*required*, <tt>String</tt>)
 *     * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *     * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *       * +runId+ - (*required*, <tt>String</tt>)
 *     * +activityType+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *     * +input+ - (<tt>String</tt>)
 *
 * @!method pollForDecisionTask(params, options)
 *   Calls the PollForDecisionTask API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +taskList+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +identity+ - (<tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *     * +maximumPageSize+ - (<tt>Integer</tt>)
 *     * +reverseOrder+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +taskToken+ - (*required*, <tt>String</tt>)
 *     * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *     * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *       * +runId+ - (*required*, <tt>String</tt>)
 *     * +workflowType+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *     * +events+ - (*required*, <tt>Array<Object></tt>)
 *       * +eventTimestamp+ - (*required*, <tt>Date</tt>)
 *       * +eventType+ - (*required*, <tt>String</tt>)
 *       * +eventId+ - (*required*, <tt>Integer</tt>)
 *       * +workflowExecutionStartedEventAttributes+ - (<tt>Object</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +continuedExecutionRunId+ - (<tt>String</tt>)
 *         * +parentWorkflowExecution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +parentInitiatedEventId+ - (<tt>Integer</tt>)
 *       * +workflowExecutionCompletedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +result+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +completeWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +workflowExecutionFailedEventAttributes+ - (<tt>Object</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +failWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +workflowExecutionTimedOutEventAttributes+ - (<tt>Object</tt>)
 *         * +timeoutType+ - (*required*, <tt>String</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *       * +workflowExecutionCanceledEventAttributes+ - (<tt>Object</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +cancelWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +workflowExecutionContinuedAsNewEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +newExecutionRunId+ - (*required*, <tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *       * +continueAsNewWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +workflowExecutionTerminatedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (<tt>String</tt>)
 *       * +workflowExecutionCancelRequestedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +externalWorkflowExecution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +externalInitiatedEventId+ - (<tt>Integer</tt>)
 *         * +cause+ - (<tt>String</tt>)
 *       * +decisionTaskScheduledEventAttributes+ - (<tt>Object</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +startToCloseTimeout+ - (<tt>String</tt>)
 *       * +decisionTaskStartedEventAttributes+ - (<tt>Object</tt>)
 *         * +identity+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *       * +decisionTaskCompletedEventAttributes+ - (<tt>Object</tt>)
 *         * +executionContext+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +decisionTaskTimedOutEventAttributes+ - (<tt>Object</tt>)
 *         * +timeoutType+ - (*required*, <tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +activityTaskScheduledEventAttributes+ - (<tt>Object</tt>)
 *         * +activityType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +scheduleToStartTimeout+ - (<tt>String</tt>)
 *         * +scheduleToCloseTimeout+ - (<tt>String</tt>)
 *         * +startToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +heartbeatTimeout+ - (<tt>String</tt>)
 *       * +activityTaskStartedEventAttributes+ - (<tt>Object</tt>)
 *         * +identity+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *       * +activityTaskCompletedEventAttributes+ - (<tt>Object</tt>)
 *         * +result+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +activityTaskFailedEventAttributes+ - (<tt>Object</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +activityTaskTimedOutEventAttributes+ - (<tt>Object</tt>)
 *         * +timeoutType+ - (*required*, <tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +details+ - (<tt>String</tt>)
 *       * +activityTaskCanceledEventAttributes+ - (<tt>Object</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +scheduledEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +latestCancelRequestedEventId+ - (<tt>Integer</tt>)
 *       * +activityTaskCancelRequestedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *       * +workflowExecutionSignaledEventAttributes+ - (<tt>Object</tt>)
 *         * +signalName+ - (*required*, <tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +externalWorkflowExecution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +externalInitiatedEventId+ - (<tt>Integer</tt>)
 *       * +markerRecordedEventAttributes+ - (<tt>Object</tt>)
 *         * +markerName+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +timerStartedEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +startToFireTimeout+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +timerFiredEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +timerCanceledEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +startChildWorkflowExecutionInitiatedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +childPolicy+ - (*required*, <tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *       * +childWorkflowExecutionStartedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionCompletedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +result+ - (<tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionTimedOutEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +timeoutType+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionCanceledEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +childWorkflowExecutionTerminatedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +startedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +signalExternalWorkflowExecutionInitiatedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +signalName+ - (*required*, <tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +externalWorkflowExecutionSignaledEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *       * +signalExternalWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +externalWorkflowExecutionCancelRequestedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowExecution+ - (*required*, <tt>Object</tt>)
 *           * +workflowId+ - (*required*, <tt>String</tt>)
 *           * +runId+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *       *
 *         +requestCancelExternalWorkflowExecutionInitiatedEventAttributes+
 *         - (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +requestCancelExternalWorkflowExecutionFailedEventAttributes+
 *         - (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +scheduleActivityTaskFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +activityType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +requestCancelActivityTaskFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +startTimerFailedEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +cancelTimerFailedEventAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *       * +startChildWorkflowExecutionFailedEventAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +cause+ - (*required*, <tt>String</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +initiatedEventId+ - (*required*, <tt>Integer</tt>)
 *         * +decisionTaskCompletedEventId+ - (*required*,
 *           <tt>Integer</tt>)
 *         * +control+ - (<tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>)
 *     * +previousStartedEventId+ - (<tt>Integer</tt>)
 *
 * @!method recordActivityTaskHeartbeat(params, options)
 *   Calls the RecordActivityTaskHeartbeat API operation.
 *   @param [Object] params
 *     * +taskToken+ - (*required*, <tt>String</tt>)
 *     * +details+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +cancelRequested+ - (*required*, <tt>Boolean</tt>)
 *
 * @!method registerActivityType(params, options)
 *   Calls the RegisterActivityType API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +name+ - (*required*, <tt>String</tt>)
 *     * +version+ - (*required*, <tt>String</tt>)
 *     * +description+ - (<tt>String</tt>)
 *     * +defaultTaskStartToCloseTimeout+ - (<tt>String</tt>)
 *     * +defaultTaskHeartbeatTimeout+ - (<tt>String</tt>)
 *     * +defaultTaskList+ - (<tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +defaultTaskScheduleToStartTimeout+ - (<tt>String</tt>)
 *     * +defaultTaskScheduleToCloseTimeout+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method registerDomain(params, options)
 *   Calls the RegisterDomain API operation.
 *   @param [Object] params
 *     * +name+ - (*required*, <tt>String</tt>)
 *     * +description+ - (<tt>String</tt>)
 *     * +workflowExecutionRetentionPeriodInDays+ - (*required*,
 *       <tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method registerWorkflowType(params, options)
 *   Calls the RegisterWorkflowType API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +name+ - (*required*, <tt>String</tt>)
 *     * +version+ - (*required*, <tt>String</tt>)
 *     * +description+ - (<tt>String</tt>)
 *     * +defaultTaskStartToCloseTimeout+ - (<tt>String</tt>)
 *     * +defaultExecutionStartToCloseTimeout+ - (<tt>String</tt>)
 *     * +defaultTaskList+ - (<tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +defaultChildPolicy+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method requestCancelWorkflowExecution(params, options)
 *   Calls the RequestCancelWorkflowExecution API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +workflowId+ - (*required*, <tt>String</tt>)
 *     * +runId+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method respondActivityTaskCanceled(params, options)
 *   Calls the RespondActivityTaskCanceled API operation.
 *   @param [Object] params
 *     * +taskToken+ - (*required*, <tt>String</tt>)
 *     * +details+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method respondActivityTaskCompleted(params, options)
 *   Calls the RespondActivityTaskCompleted API operation.
 *   @param [Object] params
 *     * +taskToken+ - (*required*, <tt>String</tt>)
 *     * +result+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method respondActivityTaskFailed(params, options)
 *   Calls the RespondActivityTaskFailed API operation.
 *   @param [Object] params
 *     * +taskToken+ - (*required*, <tt>String</tt>)
 *     * +reason+ - (<tt>String</tt>)
 *     * +details+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method respondDecisionTaskCompleted(params, options)
 *   Calls the RespondDecisionTaskCompleted API operation.
 *   @param [Object] params
 *     * +taskToken+ - (*required*, <tt>String</tt>)
 *     * +decisions+ - (<tt>Array<Object></tt>)
 *       * +decisionType+ - (*required*, <tt>String</tt>)
 *       * +scheduleActivityTaskDecisionAttributes+ - (<tt>Object</tt>)
 *         * +activityType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +scheduleToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (<tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +scheduleToStartTimeout+ - (<tt>String</tt>)
 *         * +startToCloseTimeout+ - (<tt>String</tt>)
 *         * +heartbeatTimeout+ - (<tt>String</tt>)
 *       * +requestCancelActivityTaskDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *       * +completeWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +result+ - (<tt>String</tt>)
 *       * +failWorkflowExecutionDecisionAttributes+ - (<tt>Object</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *       * +cancelWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +details+ - (<tt>String</tt>)
 *       * +continueAsNewWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (<tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +childPolicy+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +workflowTypeVersion+ - (<tt>String</tt>)
 *       * +recordMarkerDecisionAttributes+ - (<tt>Object</tt>)
 *         * +markerName+ - (*required*, <tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *       * +startTimerDecisionAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +startToFireTimeout+ - (*required*, <tt>String</tt>)
 *       * +cancelTimerDecisionAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *       * +signalExternalWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +signalName+ - (*required*, <tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +requestCancelExternalWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +startChildWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (<tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +childPolicy+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *     * +executionContext+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method signalWorkflowExecution(params, options)
 *   Calls the SignalWorkflowExecution API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +workflowId+ - (*required*, <tt>String</tt>)
 *     * +runId+ - (<tt>String</tt>)
 *     * +signalName+ - (*required*, <tt>String</tt>)
 *     * +input+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 * @!method startWorkflowExecution(params, options)
 *   Calls the StartWorkflowExecution API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +workflowId+ - (*required*, <tt>String</tt>)
 *     * +workflowType+ - (*required*, <tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *     * +taskList+ - (<tt>Object</tt>)
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +input+ - (<tt>String</tt>)
 *     * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *     * +tagList+ - (<tt>Array<String></tt>)
 *     * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *     * +childPolicy+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +runId+ - (<tt>String</tt>)
 *
 * @!method terminateWorkflowExecution(params, options)
 *   Calls the TerminateWorkflowExecution API operation.
 *   @param [Object] params
 *     * +domain+ - (*required*, <tt>String</tt>)
 *     * +workflowId+ - (*required*, <tt>String</tt>)
 *     * +runId+ - (<tt>String</tt>)
 *     * +reason+ - (<tt>String</tt>)
 *     * +details+ - (<tt>String</tt>)
 *     * +childPolicy+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest]
 *
 */
AWS.SimpleWorkflow.Client = inherit({});