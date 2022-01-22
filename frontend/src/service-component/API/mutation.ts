import gql from "graphql-tag";

export const SIGNIN_MUTATION = gql`
     mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                id
                username
                role {
                    name
                }
            }
        }
     }   
     `;

export const SIGNUP_MUTATION = gql`
     mutation signup($user: UserInput!) {
          signup(user: $user) {
               token
          }
     }
     `;

export const SIGNOUT_MUTATION = gql`
	mutation logout {
		logout
	}
`;

export const REFRESHJWT_MUTATION = gql`
     mutation refreshJWT {
          refreshJWT {
               token
               user {
                    id
                    username
                    role {
                         name
                    }
               }
          }
     }
     `;

export const CREATECOMMENT_MUTATION = gql`
    mutation createComment($comment: CommentInput!) {
        createComment(comment: $comment) {
            id
        }
    }
`;

export const DETELECOMMENT_MUTATION = gql`
    mutation deleteComment($commentId: Int!) {
        deleteComment(commentId: $commentId) {
            id
        }
    }
`;

export const ADDTEST_MUTATION = gql`
    mutation addTest($test: TestInput!) {
        addTest(test: $test) {
            id
            title
            type
        }
    }
    `;

export const ADDTESTSECTION_MUTATION = gql`
    mutation addTestSection($section: TestSectionInput!) {
        addTestSection(section: $section) {
            id
        }
    }
`;

export const ADDQUESTIONGROUP_MUTATION = gql`
    mutation addQuestionGroup($group: QuestionGroupInput!) {
        addQuestionGroup(group: $group) {
            id
        }
    }
`;

export const ADDQUESTION_MUTATION = gql`
    mutation addQuestion($question: QuestionInput!) {
        addQuestion(question: $question) {
            id
        }
    }
`;

export const ADDANSWER_MUTATION = gql`
    mutation addAnswer($answer: AnswerInput!) {
        addAnswer(answer: $answer) {
            id
        }
    }
`;

export const SUBMITTEST_MUTATION = gql`
	mutation submitTest($testSubmission: TestSubmission!) {
		submitTest(testSubmission: $testSubmission) {
			test {
				id
				title
				type
				comments {
					id
					user {
						id
						username
					}
					content
					created
				}
			}
			score
			answerHistory {
				question {
					type
					statementText
				}
				answer {
					text
				}
			}
		}
	}
`;

export const STARTTEST_MUTATION = gql`
	mutation startTest($testId: Int!, $userId: Int!) {
		startTest(testId: $testId, userId: $userId) {
			id
			title
			type
		}
	}
`;

export const DELETETEST_MUTATION = gql`
	mutation deleteTest($testId: Int!) {
		deleteTest(testId: $testId) {
			id
		}
	}
`;