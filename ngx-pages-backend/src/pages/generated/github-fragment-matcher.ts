
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Node",
        "possibleTypes": [
          {
            "name": "CodeOfConduct"
          },
          {
            "name": "Enterprise"
          },
          {
            "name": "EnterpriseUserAccount"
          },
          {
            "name": "Organization"
          },
          {
            "name": "RegistryPackage"
          },
          {
            "name": "RegistryPackageVersion"
          },
          {
            "name": "RegistryPackageDependency"
          },
          {
            "name": "RegistryPackageFile"
          },
          {
            "name": "Release"
          },
          {
            "name": "User"
          },
          {
            "name": "Project"
          },
          {
            "name": "ProjectColumn"
          },
          {
            "name": "ProjectCard"
          },
          {
            "name": "Issue"
          },
          {
            "name": "UserContentEdit"
          },
          {
            "name": "Label"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "Reaction"
          },
          {
            "name": "Repository"
          },
          {
            "name": "License"
          },
          {
            "name": "BranchProtectionRule"
          },
          {
            "name": "Ref"
          },
          {
            "name": "PushAllowance"
          },
          {
            "name": "App"
          },
          {
            "name": "Team"
          },
          {
            "name": "UserStatus"
          },
          {
            "name": "TeamDiscussion"
          },
          {
            "name": "TeamDiscussionComment"
          },
          {
            "name": "OrganizationInvitation"
          },
          {
            "name": "ReviewDismissalAllowance"
          },
          {
            "name": "CommitComment"
          },
          {
            "name": "Commit"
          },
          {
            "name": "Deployment"
          },
          {
            "name": "DeploymentStatus"
          },
          {
            "name": "Status"
          },
          {
            "name": "StatusContext"
          },
          {
            "name": "Tree"
          },
          {
            "name": "DeployKey"
          },
          {
            "name": "Language"
          },
          {
            "name": "Milestone"
          },
          {
            "name": "RepositoryTopic"
          },
          {
            "name": "Topic"
          },
          {
            "name": "RepositoryVulnerabilityAlert"
          },
          {
            "name": "SecurityAdvisory"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "PullRequestCommit"
          },
          {
            "name": "ReviewRequest"
          },
          {
            "name": "Mannequin"
          },
          {
            "name": "PullRequestReviewThread"
          },
          {
            "name": "PullRequestReviewComment"
          },
          {
            "name": "PullRequestReview"
          },
          {
            "name": "AssignedEvent"
          },
          {
            "name": "Bot"
          },
          {
            "name": "BaseRefForcePushedEvent"
          },
          {
            "name": "ClosedEvent"
          },
          {
            "name": "CommitCommentThread"
          },
          {
            "name": "CrossReferencedEvent"
          },
          {
            "name": "DemilestonedEvent"
          },
          {
            "name": "DeployedEvent"
          },
          {
            "name": "DeploymentEnvironmentChangedEvent"
          },
          {
            "name": "HeadRefDeletedEvent"
          },
          {
            "name": "HeadRefForcePushedEvent"
          },
          {
            "name": "HeadRefRestoredEvent"
          },
          {
            "name": "LabeledEvent"
          },
          {
            "name": "LockedEvent"
          },
          {
            "name": "MergedEvent"
          },
          {
            "name": "MilestonedEvent"
          },
          {
            "name": "ReferencedEvent"
          },
          {
            "name": "RenamedTitleEvent"
          },
          {
            "name": "ReopenedEvent"
          },
          {
            "name": "ReviewDismissedEvent"
          },
          {
            "name": "ReviewRequestRemovedEvent"
          },
          {
            "name": "ReviewRequestedEvent"
          },
          {
            "name": "SubscribedEvent"
          },
          {
            "name": "UnassignedEvent"
          },
          {
            "name": "UnlabeledEvent"
          },
          {
            "name": "UnlockedEvent"
          },
          {
            "name": "UnsubscribedEvent"
          },
          {
            "name": "UserBlockedEvent"
          },
          {
            "name": "AddedToProjectEvent"
          },
          {
            "name": "BaseRefChangedEvent"
          },
          {
            "name": "CommentDeletedEvent"
          },
          {
            "name": "ConvertedNoteToIssueEvent"
          },
          {
            "name": "MarkedAsDuplicateEvent"
          },
          {
            "name": "MentionedEvent"
          },
          {
            "name": "MovedColumnsInProjectEvent"
          },
          {
            "name": "PinnedEvent"
          },
          {
            "name": "PullRequestCommitCommentThread"
          },
          {
            "name": "ReadyForReviewEvent"
          },
          {
            "name": "RemovedFromProjectEvent"
          },
          {
            "name": "TransferredEvent"
          },
          {
            "name": "UnpinnedEvent"
          },
          {
            "name": "Gist"
          },
          {
            "name": "GistComment"
          },
          {
            "name": "SponsorsListing"
          },
          {
            "name": "SponsorsTier"
          },
          {
            "name": "Sponsorship"
          },
          {
            "name": "PublicKey"
          },
          {
            "name": "SavedReply"
          },
          {
            "name": "ReleaseAsset"
          },
          {
            "name": "RegistryPackageTag"
          },
          {
            "name": "MembersCanDeleteReposClearAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposDisableAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposEnableAuditEntry"
          },
          {
            "name": "OauthApplicationCreateAuditEntry"
          },
          {
            "name": "OrgAddBillingManagerAuditEntry"
          },
          {
            "name": "OrgAddMemberAuditEntry"
          },
          {
            "name": "OrgBlockUserAuditEntry"
          },
          {
            "name": "OrgConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "OrgConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "OrgCreateAuditEntry"
          },
          {
            "name": "OrgDisableOauthAppRestrictionsAuditEntry"
          },
          {
            "name": "OrgDisableSamlAuditEntry"
          },
          {
            "name": "OrgDisableTwoFactorRequirementAuditEntry"
          },
          {
            "name": "OrgEnableOauthAppRestrictionsAuditEntry"
          },
          {
            "name": "OrgEnableSamlAuditEntry"
          },
          {
            "name": "OrgEnableTwoFactorRequirementAuditEntry"
          },
          {
            "name": "OrgInviteMemberAuditEntry"
          },
          {
            "name": "OrgInviteToBusinessAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessApprovedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessDeniedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessRequestedAuditEntry"
          },
          {
            "name": "OrgRemoveBillingManagerAuditEntry"
          },
          {
            "name": "OrgRemoveMemberAuditEntry"
          },
          {
            "name": "OrgRemoveOutsideCollaboratorAuditEntry"
          },
          {
            "name": "OrgRestoreMemberAuditEntry"
          },
          {
            "name": "OrgUnblockUserAuditEntry"
          },
          {
            "name": "OrgUpdateDefaultRepositoryPermissionAuditEntry"
          },
          {
            "name": "OrgUpdateMemberAuditEntry"
          },
          {
            "name": "OrgUpdateMemberRepositoryCreationPermissionAuditEntry"
          },
          {
            "name": "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingDisableAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingEnableAuditEntry"
          },
          {
            "name": "RepoAccessAuditEntry"
          },
          {
            "name": "RepoAddMemberAuditEntry"
          },
          {
            "name": "RepoAddTopicAuditEntry"
          },
          {
            "name": "RepoArchivedAuditEntry"
          },
          {
            "name": "RepoChangeMergeSettingAuditEntry"
          },
          {
            "name": "RepoConfigDisableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigEnableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigLockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigUnlockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoCreateAuditEntry"
          },
          {
            "name": "RepoDestroyAuditEntry"
          },
          {
            "name": "RepoRemoveMemberAuditEntry"
          },
          {
            "name": "RepoRemoveTopicAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeDisableAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeEnableAuditEntry"
          },
          {
            "name": "TeamAddMemberAuditEntry"
          },
          {
            "name": "TeamAddRepositoryAuditEntry"
          },
          {
            "name": "TeamChangeParentTeamAuditEntry"
          },
          {
            "name": "TeamRemoveMemberAuditEntry"
          },
          {
            "name": "TeamRemoveRepositoryAuditEntry"
          },
          {
            "name": "OrganizationIdentityProvider"
          },
          {
            "name": "ExternalIdentity"
          },
          {
            "name": "EnterpriseServerInstallation"
          },
          {
            "name": "EnterpriseServerUserAccount"
          },
          {
            "name": "EnterpriseServerUserAccountEmail"
          },
          {
            "name": "EnterpriseServerUserAccountsUpload"
          },
          {
            "name": "EnterpriseRepositoryInfo"
          },
          {
            "name": "EnterpriseAdministratorInvitation"
          },
          {
            "name": "EnterpriseIdentityProvider"
          },
          {
            "name": "MarketplaceCategory"
          },
          {
            "name": "MarketplaceListing"
          },
          {
            "name": "Blob"
          },
          {
            "name": "RepositoryInvitation"
          },
          {
            "name": "Tag"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "EnterpriseMember",
        "possibleTypes": [
          {
            "name": "EnterpriseUserAccount"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Actor",
        "possibleTypes": [
          {
            "name": "EnterpriseUserAccount"
          },
          {
            "name": "Organization"
          },
          {
            "name": "User"
          },
          {
            "name": "Mannequin"
          },
          {
            "name": "Bot"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "RegistryPackageOwner",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "User"
          },
          {
            "name": "Repository"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "UniformResourceLocatable",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "Release"
          },
          {
            "name": "User"
          },
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "Repository"
          },
          {
            "name": "TeamDiscussion"
          },
          {
            "name": "TeamDiscussionComment"
          },
          {
            "name": "Commit"
          },
          {
            "name": "Milestone"
          },
          {
            "name": "RepositoryTopic"
          },
          {
            "name": "PullRequestCommit"
          },
          {
            "name": "Mannequin"
          },
          {
            "name": "Bot"
          },
          {
            "name": "ClosedEvent"
          },
          {
            "name": "CrossReferencedEvent"
          },
          {
            "name": "MergedEvent"
          },
          {
            "name": "ReviewDismissedEvent"
          },
          {
            "name": "ReadyForReviewEvent"
          },
          {
            "name": "Gist"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "RegistryPackageSearch",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "User"
          },
          {
            "name": "Repository"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ProjectOwner",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "User"
          },
          {
            "name": "Repository"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Closable",
        "possibleTypes": [
          {
            "name": "Project"
          },
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "Milestone"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Updatable",
        "possibleTypes": [
          {
            "name": "Project"
          },
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "TeamDiscussion"
          },
          {
            "name": "TeamDiscussionComment"
          },
          {
            "name": "CommitComment"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "PullRequestReviewComment"
          },
          {
            "name": "PullRequestReview"
          },
          {
            "name": "GistComment"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ProjectCardItem",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Assignable",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Comment",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "TeamDiscussion"
          },
          {
            "name": "TeamDiscussionComment"
          },
          {
            "name": "CommitComment"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "PullRequestReviewComment"
          },
          {
            "name": "PullRequestReview"
          },
          {
            "name": "GistComment"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "UpdatableComment",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "TeamDiscussion"
          },
          {
            "name": "TeamDiscussionComment"
          },
          {
            "name": "CommitComment"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "PullRequestReviewComment"
          },
          {
            "name": "PullRequestReview"
          },
          {
            "name": "GistComment"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Labelable",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Lockable",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Reactable",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "TeamDiscussion"
          },
          {
            "name": "TeamDiscussionComment"
          },
          {
            "name": "CommitComment"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "PullRequestReviewComment"
          },
          {
            "name": "PullRequestReview"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "RepositoryNode",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "CommitComment"
          },
          {
            "name": "RepositoryVulnerabilityAlert"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "PullRequestReviewComment"
          },
          {
            "name": "PullRequestReview"
          },
          {
            "name": "CommitCommentThread"
          },
          {
            "name": "PullRequestCommitCommentThread"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Subscribable",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "Repository"
          },
          {
            "name": "Team"
          },
          {
            "name": "TeamDiscussion"
          },
          {
            "name": "Commit"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Starrable",
        "possibleTypes": [
          {
            "name": "Repository"
          },
          {
            "name": "Topic"
          },
          {
            "name": "Gist"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "RepositoryInfo",
        "possibleTypes": [
          {
            "name": "Repository"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "RepositoryOwner",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "GitObject",
        "possibleTypes": [
          {
            "name": "Commit"
          },
          {
            "name": "Tree"
          },
          {
            "name": "Blob"
          },
          {
            "name": "Tag"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "PushAllowanceActor",
        "possibleTypes": [
          {
            "name": "App"
          },
          {
            "name": "Team"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "MemberStatusable",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "Team"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Deletable",
        "possibleTypes": [
          {
            "name": "TeamDiscussion"
          },
          {
            "name": "TeamDiscussionComment"
          },
          {
            "name": "CommitComment"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "PullRequestReviewComment"
          },
          {
            "name": "PullRequestReview"
          },
          {
            "name": "GistComment"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ReviewDismissalAllowanceActor",
        "possibleTypes": [
          {
            "name": "Team"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "PermissionGranter",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "Repository"
          },
          {
            "name": "Team"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "GitSignature",
        "possibleTypes": [
          {
            "name": "GpgSignature"
          },
          {
            "name": "SmimeSignature"
          },
          {
            "name": "UnknownSignature"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "IssueOrPullRequest",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "HovercardContext",
        "possibleTypes": [
          {
            "name": "GenericHovercardContext"
          },
          {
            "name": "OrganizationsHovercardContext"
          },
          {
            "name": "OrganizationTeamsHovercardContext"
          },
          {
            "name": "ReviewStatusHovercardContext"
          },
          {
            "name": "ViewerHovercardContext"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RequestedReviewer",
        "possibleTypes": [
          {
            "name": "Mannequin"
          },
          {
            "name": "Team"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "PullRequestTimelineItem",
        "possibleTypes": [
          {
            "name": "AssignedEvent"
          },
          {
            "name": "BaseRefForcePushedEvent"
          },
          {
            "name": "ClosedEvent"
          },
          {
            "name": "Commit"
          },
          {
            "name": "CommitCommentThread"
          },
          {
            "name": "CrossReferencedEvent"
          },
          {
            "name": "DemilestonedEvent"
          },
          {
            "name": "DeployedEvent"
          },
          {
            "name": "DeploymentEnvironmentChangedEvent"
          },
          {
            "name": "HeadRefDeletedEvent"
          },
          {
            "name": "HeadRefForcePushedEvent"
          },
          {
            "name": "HeadRefRestoredEvent"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "LabeledEvent"
          },
          {
            "name": "LockedEvent"
          },
          {
            "name": "MergedEvent"
          },
          {
            "name": "MilestonedEvent"
          },
          {
            "name": "PullRequestReview"
          },
          {
            "name": "PullRequestReviewComment"
          },
          {
            "name": "PullRequestReviewThread"
          },
          {
            "name": "ReferencedEvent"
          },
          {
            "name": "RenamedTitleEvent"
          },
          {
            "name": "ReopenedEvent"
          },
          {
            "name": "ReviewDismissedEvent"
          },
          {
            "name": "ReviewRequestRemovedEvent"
          },
          {
            "name": "ReviewRequestedEvent"
          },
          {
            "name": "SubscribedEvent"
          },
          {
            "name": "UnassignedEvent"
          },
          {
            "name": "UnlabeledEvent"
          },
          {
            "name": "UnlockedEvent"
          },
          {
            "name": "UnsubscribedEvent"
          },
          {
            "name": "UserBlockedEvent"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Assignee",
        "possibleTypes": [
          {
            "name": "Bot"
          },
          {
            "name": "Mannequin"
          },
          {
            "name": "Organization"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Closer",
        "possibleTypes": [
          {
            "name": "Commit"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ReferencedSubject",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MilestoneItem",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RenamedTitleSubject",
        "possibleTypes": [
          {
            "name": "Issue"
          },
          {
            "name": "PullRequest"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "PullRequestTimelineItems",
        "possibleTypes": [
          {
            "name": "AddedToProjectEvent"
          },
          {
            "name": "AssignedEvent"
          },
          {
            "name": "BaseRefChangedEvent"
          },
          {
            "name": "BaseRefForcePushedEvent"
          },
          {
            "name": "ClosedEvent"
          },
          {
            "name": "CommentDeletedEvent"
          },
          {
            "name": "ConvertedNoteToIssueEvent"
          },
          {
            "name": "CrossReferencedEvent"
          },
          {
            "name": "DemilestonedEvent"
          },
          {
            "name": "DeployedEvent"
          },
          {
            "name": "DeploymentEnvironmentChangedEvent"
          },
          {
            "name": "HeadRefDeletedEvent"
          },
          {
            "name": "HeadRefForcePushedEvent"
          },
          {
            "name": "HeadRefRestoredEvent"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "LabeledEvent"
          },
          {
            "name": "LockedEvent"
          },
          {
            "name": "MarkedAsDuplicateEvent"
          },
          {
            "name": "MentionedEvent"
          },
          {
            "name": "MergedEvent"
          },
          {
            "name": "MilestonedEvent"
          },
          {
            "name": "MovedColumnsInProjectEvent"
          },
          {
            "name": "PinnedEvent"
          },
          {
            "name": "PullRequestCommit"
          },
          {
            "name": "PullRequestCommitCommentThread"
          },
          {
            "name": "PullRequestReview"
          },
          {
            "name": "PullRequestReviewThread"
          },
          {
            "name": "PullRequestRevisionMarker"
          },
          {
            "name": "ReadyForReviewEvent"
          },
          {
            "name": "ReferencedEvent"
          },
          {
            "name": "RemovedFromProjectEvent"
          },
          {
            "name": "RenamedTitleEvent"
          },
          {
            "name": "ReopenedEvent"
          },
          {
            "name": "ReviewDismissedEvent"
          },
          {
            "name": "ReviewRequestRemovedEvent"
          },
          {
            "name": "ReviewRequestedEvent"
          },
          {
            "name": "SubscribedEvent"
          },
          {
            "name": "TransferredEvent"
          },
          {
            "name": "UnassignedEvent"
          },
          {
            "name": "UnlabeledEvent"
          },
          {
            "name": "UnlockedEvent"
          },
          {
            "name": "UnpinnedEvent"
          },
          {
            "name": "UnsubscribedEvent"
          },
          {
            "name": "UserBlockedEvent"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "IssueTimelineItem",
        "possibleTypes": [
          {
            "name": "AssignedEvent"
          },
          {
            "name": "ClosedEvent"
          },
          {
            "name": "Commit"
          },
          {
            "name": "CrossReferencedEvent"
          },
          {
            "name": "DemilestonedEvent"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "LabeledEvent"
          },
          {
            "name": "LockedEvent"
          },
          {
            "name": "MilestonedEvent"
          },
          {
            "name": "ReferencedEvent"
          },
          {
            "name": "RenamedTitleEvent"
          },
          {
            "name": "ReopenedEvent"
          },
          {
            "name": "SubscribedEvent"
          },
          {
            "name": "TransferredEvent"
          },
          {
            "name": "UnassignedEvent"
          },
          {
            "name": "UnlabeledEvent"
          },
          {
            "name": "UnlockedEvent"
          },
          {
            "name": "UnsubscribedEvent"
          },
          {
            "name": "UserBlockedEvent"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "IssueTimelineItems",
        "possibleTypes": [
          {
            "name": "AddedToProjectEvent"
          },
          {
            "name": "AssignedEvent"
          },
          {
            "name": "ClosedEvent"
          },
          {
            "name": "CommentDeletedEvent"
          },
          {
            "name": "ConvertedNoteToIssueEvent"
          },
          {
            "name": "CrossReferencedEvent"
          },
          {
            "name": "DemilestonedEvent"
          },
          {
            "name": "IssueComment"
          },
          {
            "name": "LabeledEvent"
          },
          {
            "name": "LockedEvent"
          },
          {
            "name": "MarkedAsDuplicateEvent"
          },
          {
            "name": "MentionedEvent"
          },
          {
            "name": "MilestonedEvent"
          },
          {
            "name": "MovedColumnsInProjectEvent"
          },
          {
            "name": "PinnedEvent"
          },
          {
            "name": "ReferencedEvent"
          },
          {
            "name": "RemovedFromProjectEvent"
          },
          {
            "name": "RenamedTitleEvent"
          },
          {
            "name": "ReopenedEvent"
          },
          {
            "name": "SubscribedEvent"
          },
          {
            "name": "TransferredEvent"
          },
          {
            "name": "UnassignedEvent"
          },
          {
            "name": "UnlabeledEvent"
          },
          {
            "name": "UnlockedEvent"
          },
          {
            "name": "UnpinnedEvent"
          },
          {
            "name": "UnsubscribedEvent"
          },
          {
            "name": "UserBlockedEvent"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "ProfileOwner",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "PinnableItem",
        "possibleTypes": [
          {
            "name": "Gist"
          },
          {
            "name": "Repository"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Sponsorable",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Contribution",
        "possibleTypes": [
          {
            "name": "CreatedCommitContribution"
          },
          {
            "name": "CreatedIssueContribution"
          },
          {
            "name": "RestrictedContribution"
          },
          {
            "name": "CreatedPullRequestContribution"
          },
          {
            "name": "CreatedRepositoryContribution"
          },
          {
            "name": "JoinedGitHubContribution"
          },
          {
            "name": "CreatedPullRequestReviewContribution"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreatedIssueOrRestrictedContribution",
        "possibleTypes": [
          {
            "name": "CreatedIssueContribution"
          },
          {
            "name": "RestrictedContribution"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreatedPullRequestOrRestrictedContribution",
        "possibleTypes": [
          {
            "name": "CreatedPullRequestContribution"
          },
          {
            "name": "RestrictedContribution"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreatedRepositoryOrRestrictedContribution",
        "possibleTypes": [
          {
            "name": "CreatedRepositoryContribution"
          },
          {
            "name": "RestrictedContribution"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "OrganizationAuditEntry",
        "possibleTypes": [
          {
            "name": "MembersCanDeleteReposClearAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposDisableAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposEnableAuditEntry"
          },
          {
            "name": "OauthApplicationCreateAuditEntry"
          },
          {
            "name": "OrgAddBillingManagerAuditEntry"
          },
          {
            "name": "OrgAddMemberAuditEntry"
          },
          {
            "name": "OrgBlockUserAuditEntry"
          },
          {
            "name": "OrgConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "OrgConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "OrgCreateAuditEntry"
          },
          {
            "name": "OrgDisableOauthAppRestrictionsAuditEntry"
          },
          {
            "name": "OrgDisableSamlAuditEntry"
          },
          {
            "name": "OrgDisableTwoFactorRequirementAuditEntry"
          },
          {
            "name": "OrgEnableOauthAppRestrictionsAuditEntry"
          },
          {
            "name": "OrgEnableSamlAuditEntry"
          },
          {
            "name": "OrgEnableTwoFactorRequirementAuditEntry"
          },
          {
            "name": "OrgInviteMemberAuditEntry"
          },
          {
            "name": "OrgInviteToBusinessAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessApprovedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessDeniedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessRequestedAuditEntry"
          },
          {
            "name": "OrgRemoveBillingManagerAuditEntry"
          },
          {
            "name": "OrgRemoveMemberAuditEntry"
          },
          {
            "name": "OrgRemoveOutsideCollaboratorAuditEntry"
          },
          {
            "name": "OrgRestoreMemberAuditEntry"
          },
          {
            "name": "OrgUnblockUserAuditEntry"
          },
          {
            "name": "OrgUpdateDefaultRepositoryPermissionAuditEntry"
          },
          {
            "name": "OrgUpdateMemberAuditEntry"
          },
          {
            "name": "OrgUpdateMemberRepositoryCreationPermissionAuditEntry"
          },
          {
            "name": "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingDisableAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingEnableAuditEntry"
          },
          {
            "name": "RepoAccessAuditEntry"
          },
          {
            "name": "RepoAddMemberAuditEntry"
          },
          {
            "name": "RepoAddTopicAuditEntry"
          },
          {
            "name": "RepoArchivedAuditEntry"
          },
          {
            "name": "RepoChangeMergeSettingAuditEntry"
          },
          {
            "name": "RepoConfigDisableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigEnableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigLockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigUnlockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoCreateAuditEntry"
          },
          {
            "name": "RepoDestroyAuditEntry"
          },
          {
            "name": "RepoRemoveMemberAuditEntry"
          },
          {
            "name": "RepoRemoveTopicAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeDisableAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeEnableAuditEntry"
          },
          {
            "name": "TeamAddMemberAuditEntry"
          },
          {
            "name": "TeamAddRepositoryAuditEntry"
          },
          {
            "name": "TeamChangeParentTeamAuditEntry"
          },
          {
            "name": "TeamRemoveMemberAuditEntry"
          },
          {
            "name": "TeamRemoveRepositoryAuditEntry"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "AuditEntry",
        "possibleTypes": [
          {
            "name": "MembersCanDeleteReposClearAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposDisableAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposEnableAuditEntry"
          },
          {
            "name": "OauthApplicationCreateAuditEntry"
          },
          {
            "name": "OrgAddBillingManagerAuditEntry"
          },
          {
            "name": "OrgAddMemberAuditEntry"
          },
          {
            "name": "OrgBlockUserAuditEntry"
          },
          {
            "name": "OrgConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "OrgConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "OrgCreateAuditEntry"
          },
          {
            "name": "OrgDisableOauthAppRestrictionsAuditEntry"
          },
          {
            "name": "OrgDisableSamlAuditEntry"
          },
          {
            "name": "OrgDisableTwoFactorRequirementAuditEntry"
          },
          {
            "name": "OrgEnableOauthAppRestrictionsAuditEntry"
          },
          {
            "name": "OrgEnableSamlAuditEntry"
          },
          {
            "name": "OrgEnableTwoFactorRequirementAuditEntry"
          },
          {
            "name": "OrgInviteMemberAuditEntry"
          },
          {
            "name": "OrgInviteToBusinessAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessApprovedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessDeniedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessRequestedAuditEntry"
          },
          {
            "name": "OrgRemoveBillingManagerAuditEntry"
          },
          {
            "name": "OrgRemoveMemberAuditEntry"
          },
          {
            "name": "OrgRemoveOutsideCollaboratorAuditEntry"
          },
          {
            "name": "OrgRestoreMemberAuditEntry"
          },
          {
            "name": "OrgUnblockUserAuditEntry"
          },
          {
            "name": "OrgUpdateDefaultRepositoryPermissionAuditEntry"
          },
          {
            "name": "OrgUpdateMemberAuditEntry"
          },
          {
            "name": "OrgUpdateMemberRepositoryCreationPermissionAuditEntry"
          },
          {
            "name": "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingDisableAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingEnableAuditEntry"
          },
          {
            "name": "RepoAccessAuditEntry"
          },
          {
            "name": "RepoAddMemberAuditEntry"
          },
          {
            "name": "RepoAddTopicAuditEntry"
          },
          {
            "name": "RepoArchivedAuditEntry"
          },
          {
            "name": "RepoChangeMergeSettingAuditEntry"
          },
          {
            "name": "RepoConfigDisableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigEnableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigLockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigUnlockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoCreateAuditEntry"
          },
          {
            "name": "RepoDestroyAuditEntry"
          },
          {
            "name": "RepoRemoveMemberAuditEntry"
          },
          {
            "name": "RepoRemoveTopicAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeDisableAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeEnableAuditEntry"
          },
          {
            "name": "TeamAddMemberAuditEntry"
          },
          {
            "name": "TeamAddRepositoryAuditEntry"
          },
          {
            "name": "TeamChangeParentTeamAuditEntry"
          },
          {
            "name": "TeamRemoveMemberAuditEntry"
          },
          {
            "name": "TeamRemoveRepositoryAuditEntry"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "AuditEntryActor",
        "possibleTypes": [
          {
            "name": "Bot"
          },
          {
            "name": "Organization"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "EnterpriseAuditEntryData",
        "possibleTypes": [
          {
            "name": "MembersCanDeleteReposClearAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposDisableAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposEnableAuditEntry"
          },
          {
            "name": "OrgInviteToBusinessAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingDisableAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingEnableAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeDisableAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeEnableAuditEntry"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "OrganizationAuditEntryData",
        "possibleTypes": [
          {
            "name": "MembersCanDeleteReposClearAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposDisableAuditEntry"
          },
          {
            "name": "MembersCanDeleteReposEnableAuditEntry"
          },
          {
            "name": "OauthApplicationCreateAuditEntry"
          },
          {
            "name": "OrgAddBillingManagerAuditEntry"
          },
          {
            "name": "OrgAddMemberAuditEntry"
          },
          {
            "name": "OrgBlockUserAuditEntry"
          },
          {
            "name": "OrgConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "OrgConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "OrgCreateAuditEntry"
          },
          {
            "name": "OrgDisableOauthAppRestrictionsAuditEntry"
          },
          {
            "name": "OrgDisableSamlAuditEntry"
          },
          {
            "name": "OrgDisableTwoFactorRequirementAuditEntry"
          },
          {
            "name": "OrgEnableOauthAppRestrictionsAuditEntry"
          },
          {
            "name": "OrgEnableSamlAuditEntry"
          },
          {
            "name": "OrgEnableTwoFactorRequirementAuditEntry"
          },
          {
            "name": "OrgInviteMemberAuditEntry"
          },
          {
            "name": "OrgInviteToBusinessAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessApprovedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessDeniedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessRequestedAuditEntry"
          },
          {
            "name": "OrgRemoveBillingManagerAuditEntry"
          },
          {
            "name": "OrgRemoveMemberAuditEntry"
          },
          {
            "name": "OrgRemoveOutsideCollaboratorAuditEntry"
          },
          {
            "name": "OrgRestoreMemberAuditEntry"
          },
          {
            "name": "OrgRestoreMemberMembershipOrganizationAuditEntryData"
          },
          {
            "name": "OrgUnblockUserAuditEntry"
          },
          {
            "name": "OrgUpdateDefaultRepositoryPermissionAuditEntry"
          },
          {
            "name": "OrgUpdateMemberAuditEntry"
          },
          {
            "name": "OrgUpdateMemberRepositoryCreationPermissionAuditEntry"
          },
          {
            "name": "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingDisableAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingEnableAuditEntry"
          },
          {
            "name": "RepoAccessAuditEntry"
          },
          {
            "name": "RepoAddMemberAuditEntry"
          },
          {
            "name": "RepoAddTopicAuditEntry"
          },
          {
            "name": "RepoArchivedAuditEntry"
          },
          {
            "name": "RepoChangeMergeSettingAuditEntry"
          },
          {
            "name": "RepoConfigDisableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigEnableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigLockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigUnlockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoCreateAuditEntry"
          },
          {
            "name": "RepoDestroyAuditEntry"
          },
          {
            "name": "RepoRemoveMemberAuditEntry"
          },
          {
            "name": "RepoRemoveTopicAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeDisableAuditEntry"
          },
          {
            "name": "RepositoryVisibilityChangeEnableAuditEntry"
          },
          {
            "name": "TeamAddMemberAuditEntry"
          },
          {
            "name": "TeamAddRepositoryAuditEntry"
          },
          {
            "name": "TeamChangeParentTeamAuditEntry"
          },
          {
            "name": "TeamRemoveMemberAuditEntry"
          },
          {
            "name": "TeamRemoveRepositoryAuditEntry"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "OauthApplicationAuditEntryData",
        "possibleTypes": [
          {
            "name": "OauthApplicationCreateAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessApprovedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessDeniedAuditEntry"
          },
          {
            "name": "OrgOauthAppAccessRequestedAuditEntry"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "OrgRestoreMemberAuditEntryMembership",
        "possibleTypes": [
          {
            "name": "OrgRestoreMemberMembershipOrganizationAuditEntryData"
          },
          {
            "name": "OrgRestoreMemberMembershipRepositoryAuditEntryData"
          },
          {
            "name": "OrgRestoreMemberMembershipTeamAuditEntryData"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "RepositoryAuditEntryData",
        "possibleTypes": [
          {
            "name": "OrgRestoreMemberMembershipRepositoryAuditEntryData"
          },
          {
            "name": "PrivateRepositoryForkingDisableAuditEntry"
          },
          {
            "name": "PrivateRepositoryForkingEnableAuditEntry"
          },
          {
            "name": "RepoAccessAuditEntry"
          },
          {
            "name": "RepoAddMemberAuditEntry"
          },
          {
            "name": "RepoAddTopicAuditEntry"
          },
          {
            "name": "RepoArchivedAuditEntry"
          },
          {
            "name": "RepoChangeMergeSettingAuditEntry"
          },
          {
            "name": "RepoConfigDisableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigDisableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigDisableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigEnableAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigEnableCollaboratorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableContributorsOnlyAuditEntry"
          },
          {
            "name": "RepoConfigEnableSockpuppetDisallowedAuditEntry"
          },
          {
            "name": "RepoConfigLockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoConfigUnlockAnonymousGitAccessAuditEntry"
          },
          {
            "name": "RepoCreateAuditEntry"
          },
          {
            "name": "RepoDestroyAuditEntry"
          },
          {
            "name": "RepoRemoveMemberAuditEntry"
          },
          {
            "name": "RepoRemoveTopicAuditEntry"
          },
          {
            "name": "TeamAddRepositoryAuditEntry"
          },
          {
            "name": "TeamRemoveRepositoryAuditEntry"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "TeamAuditEntryData",
        "possibleTypes": [
          {
            "name": "OrgRestoreMemberMembershipTeamAuditEntryData"
          },
          {
            "name": "TeamAddMemberAuditEntry"
          },
          {
            "name": "TeamAddRepositoryAuditEntry"
          },
          {
            "name": "TeamChangeParentTeamAuditEntry"
          },
          {
            "name": "TeamRemoveMemberAuditEntry"
          },
          {
            "name": "TeamRemoveRepositoryAuditEntry"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "TopicAuditEntryData",
        "possibleTypes": [
          {
            "name": "RepoAddTopicAuditEntry"
          },
          {
            "name": "RepoRemoveTopicAuditEntry"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SearchResultItem",
        "possibleTypes": [
          {
            "name": "App"
          },
          {
            "name": "Issue"
          },
          {
            "name": "MarketplaceListing"
          },
          {
            "name": "Organization"
          },
          {
            "name": "PullRequest"
          },
          {
            "name": "Repository"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CollectionItemContent",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "Repository"
          },
          {
            "name": "User"
          }
        ]
      }
    ]
  }
};
      export default result;
    