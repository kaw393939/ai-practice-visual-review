# Keep the work visible

The [exercise](../start) describes the working cycle. GitHub holds the connections so you and someone helping you can follow a change later.

## Spec → issue → change → check

- **Spec:** what should happen, with a stable feature ID such as LINK-001.
- **Issue:** one small task, a spec link, and a few examples of the expected result.
- **Pull request:** the proposed change, the feature ID, and `Closes #123` linking its issue.
- **Check:** try the behavior and record how it was checked. Link relevant code and tests from the spec.

An issue is a task record; a branch keeps its edits together; a pull request lets you inspect the difference before merging it into the main version.

Use open issues for remaining work and close them when the agreed behavior works. Add labels only when useful. No extra board is required. If one feature needs several small tasks, link those issues from its spec.

## Keep the record small

Record decisions beside the affected feature. Update an existing description when behavior changes. Link to code and tests once they exist; until then, write **Not implemented** or **Not verified**.

A useful pull request says what changed, links its issue, and explains how you checked it. A long chat transcript is unnecessary.

[Follow your first change](../practice) · [See the worked example](../example) · [Copy the spec template](../specs/template) · [Open issues](https://github.com/kaw393939/218_spec/issues)
